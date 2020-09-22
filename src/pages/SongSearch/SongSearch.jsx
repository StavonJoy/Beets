import React, { Component } from 'react'
import SearchForm from '../../components/SearchBar/SearchBar'
import * as SpotifyService from '../../services/spotifyService'

class SongSearch extends Component {
    state = {  
        songs: [],
      }

    handleSongSearch = async (formData) => {
        const songs = await SpotifyService.songSearch(formData)
        console.log(songs)
        // this.setState({songs: songs.results})
    }

    render() { 
        return ( 
            <>
                <h3>Songs go here</h3>
                <SearchForm handleSongSearch={this.handleSongSearch} />
            </>
         );
    }
}
 
export default SongSearch;