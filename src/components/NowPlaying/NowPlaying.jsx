import React, { Component } from 'react'
import * as spotifyService from '../../services/spotifyService'
import './NowPlaying.css'

class NowPlaying extends Component {
    state = { 
        nowPlaying: {
            name: 'Not Checked', 
            albumArt: '?', 
            artist: 'Not Checked',
            link: ''},
            notChecked: false
     }

     handleGetNowPlaying = async newPlayData => {
        const response = await spotifyService.getNowPlaying(newPlayData);
        console.log(response)
        this.setState({nowPlaying: { 
          name: response.item.name, 
          albumArt: response.item.album.images[0].url,
          artist: response.item.artists[0].name,
          link: response.item.external_urls.spotify
        }, notChecked: true})
      }

    render() { 
        const notChecked = this.state.notChecked;
        return ( 
        <div className="nowplaying">
            {notChecked ?
            <div>
            { this.state.nowPlaying.name }
            <br></br>
            { this.state.nowPlaying.artist }
            <br></br>
                <a href={this.state.nowPlaying.link}>
            <img alt='album art' src={this.state.nowPlaying.albumArt ? this.state.nowPlaying.albumArt : ''} style={{ height: 150 }}/>
            </a>
            </div> :
            <div></div>
             }
            <button class="btn btn-dark" onClick={()=> this.handleGetNowPlaying()}>
                Check Now Playing
            </button>
        </div>
         );
    }
}
 
export default NowPlaying;