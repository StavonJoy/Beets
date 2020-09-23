import React, { Component } from 'react'
import NowPlaying from '../../components/NowPlaying/NowPlaying'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'
import './PlaylistIndex.css'
import * as playlistAPI from '../../services/playlists-api'
import * as spotifyService from '../../services/spotifyService'

class PlaylistIndex extends Component {
    state = { 
        nowPlaying: {
            name: 'Not Checked', 
            albumArt: '?', 
            artist: 'Not Checked',
            link: '',
            notChecked: false
        },
        playlists: [],
     }

     handleAddNowPlaying = async (newSong, playlistId) => {
        const updatedPlaylist = await playlistAPI.addToPlayList(newSong, playlistId)
        const newPlaylistArray = this.state.playlists.map(p =>
            p._id === updatedPlaylist._id ? updatedPlaylist : p)
        this.setState({playlists: newPlaylistArray},
        () => this.props.history.push('/playlists'))
        }

     handleGetNowPlaying = async newPlayData => {
        const response = await spotifyService.getNowPlaying(newPlayData);
        console.log(response)
        this.setState({nowPlaying: { 
          name: response.item.name, 
          albumArt: response.item.album.images[0].url,
          artist: response.item.artists[0].name,
          link: response.item.external_urls.spotify,
          notChecked: true}});
      }
    
    async componentDidMount() {
        const playlists = await playlistAPI.getAll();
        this.setState({ playlists })
    }
    
    render() { 
        return ( 
            <div className=''>
                {this.state.playlists.map(playlist =>
                <PlaylistCard 
                    key={playlist._id}
                    playlist={playlist}
                    user={this.props.user}
                    nowPlayingName = {this.state.nowPlaying.name}
                    nowPlayingArtist = {this.state.nowPlaying.artist}
                    nowPlayingAlbumArt = {this.state.nowPlaying.albumArt}
                    nowPlayingLink = {this.state.nowPlaying.link}
                    nowPlayingNotChecked = {this.state.nowPlaying.notChecked}
                    handleAddNowPlaying = {this.handleAddNowPlaying}
            />
            )}
                <NowPlaying 
                    handleGetNowPlaying={this.handleGetNowPlaying}
                    nowPlayingName = {this.state.nowPlaying.name}
                    nowPlayingArtist = {this.state.nowPlaying.artist}
                    nowPlayingAlbumArt = {this.state.nowPlaying.albumArt}
                    nowPlayingLink = {this.state.nowPlaying.link}
                    nowPlayingNotChecked = {this.state.nowPlaying.notChecked}
            />
        </div>
         );
    }
}
 
export default PlaylistIndex;

// function PlaylistIndex(props) {
//     return (
//         <div className=''>
//         {props.playlists.map(playlist =>
//             <PlaylistCard 
//                 key={playlist._id}
//                 playlist={playlist}
//                 handleDeleteMovie={props.handleDeleteMovie}
//                 user={props.user}
//             />
//         )}
//         <NowPlaying 
//         handleGetNowPlaying={props.handleGetNowPlaying}
//         nowPlayingName = {props.nowPlayingName}
//         nowPlayingArtist = {props.nowPlayingArtist}
//         nowPlayingAlbumArt = {props.nowPlayingAlbumArt}
//         nowPlayingLink = {props.nowPlayingLink}
//         nowPlayingNotChecked = {props.nowPlayingNotChecked}
//         />
//     </div>
//     )
// }

// export default PlaylistIndex;