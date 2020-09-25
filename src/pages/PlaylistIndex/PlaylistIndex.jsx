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

      refreshPage() {
        window.location.reload();
      }

     handleDeletePlaylist = async id => {
          await playlistAPI.deleteOne(id);
          this.setState(state => ({
            playlist: this.state.playlists.filter(p => p._id !== id)
          }), () => this.props.history.push('/playlists'));
          this.refreshPage()
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
            <div className="playlists-container">
                    <h1 id="logo-1">Playlists</h1>
                    <NowPlaying 
                        handleGetNowPlaying={this.handleGetNowPlaying}
                        nowPlayingName = {this.state.nowPlaying.name}
                        nowPlayingArtist = {this.state.nowPlaying.artist}
                        nowPlayingAlbumArt = {this.state.nowPlaying.albumArt}
                        nowPlayingLink = {this.state.nowPlaying.link}
                        nowPlayingNotChecked = {this.state.nowPlaying.notChecked}
                    />
                <div className='playlists-div'>
                    {this.state.playlists.reverse().map(playlist =>
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
                        handleDeletePlaylist = {this.handleDeletePlaylist}
                    />                    
                    )}
                </div>
            </div>
         );
    }
}
 
export default PlaylistIndex;
