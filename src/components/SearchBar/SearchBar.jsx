import React, { Component } from 'react'

class SearchBar extends Component {
    state = { 
        formData: {
            query: '',
        },
     };

// This stuff absolutely does not work yet. 
// Need to write handle submit function. 
// Where is this going?

    handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSongSearch(this.state.formData)
    }

    handleChange = (e) => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        };
        this.setState({
            formData,
        });
    };

    render() { 
        return ( 
            <div>
                <label>Find a song:</label>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='query'
                        type='text'
                        value={this.state.formData.query}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
         );
    }
}
 
export default SearchBar;