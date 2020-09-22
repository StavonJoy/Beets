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
        console.log(this.props.token)
        this.setState({nowPlaying: { 
          name: response.item.name, 
          albumArt: response.item.album.images[0].url,
          artist: response.item.artists[0].name,
          link: response.item.external_urls.spotify
        }, notChecked: true})
      }

      //This is all just test stuff for formatting and practicing where we can make these calls from.
      // can we pass spotify tokens from the component to the service call via the handle function?
    
    // getTopTracks() {
    //     return fetch("https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks?country=SE",
    //             {
    //                 headers: { 'Accept': 'application/json', 'content-type': 'application/json', 'Authorization': "Bearer " + this.props.token },
    //             })
    //             .then(res => {
    //                 console.log(res, '<-- response object')
    //                 return res.json();
    //               })
    //             }

    // export function getAllUsers() {
    //     return fetch(
    //       BASE_URL,
    //       {
    //         headers: { 'Authorization': "Bearer " + tokenService.getToken() },
    //       },
    //       { mode: "cors" }
    //     ).then((res) => res.json());
    //   }

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
            <button className="btn btn-dark" onClick={()=> this.handleGetNowPlaying()}>
                Check Now Playing
            </button>
            <button onClick={()=> this.getTopTracks()}>FUCKING WORK</button>
        </div>
         );
    }
}
 
export default NowPlaying;