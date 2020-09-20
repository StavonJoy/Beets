import React, { Component } from 'react'
import SearchForm from '../../components/SearchBar/SearchBar'

class ArtistSearch extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <h3>Artists go here</h3>
                <SearchForm />
            </>
         );
    }
}
 
export default ArtistSearch;