import React, { Component } from 'react'
import * as spotifyService from '../../services/spotifyService'
import SearchBar from '../../components/SearchBar/SearchBar'

class MakePlaylist extends Component {
    state = { 
        playlist: [],
        artists: []
     }

    handleSearchArtistNames = async artistNames => {
        const response = await spotifyService.searchArtistNames(artistNames);
        console.log(response)
        // this.setState({ artists: response })
    }

    render() { 
        return ( 
            <div>
                <h2>Playlists go here</h2>
                <form>
                    <input type="text" name="name"></input>
                    <br></br>
                    <button>Start Playlist</button>
                </form>
                <SearchBar 
                handleSearchArtistNames = {this.state.handleSearchArtistNames}/>
            </div>
         );
    }
}

// add function to form button to create new playlist--will need a route? to shoot to mongodb?
// need to .push songs we search and select into playlist.songs
// map the array of returned search results with a button of the idx to perform the push method when clicked--reset the page each time
// need to add chat component when ready
// should playlist form be its own component?
// do we need to pass the token to the handle function? no, right?

export default MakePlaylist;