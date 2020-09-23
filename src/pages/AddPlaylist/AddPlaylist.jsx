import React, { Component } from 'react'
import './AddPlaylist.css'

class AddPlaylist extends Component {
    state = { 
        playlist: [],
        formData: {
            name: '',
            vibe: '',
        }
     }

     formRef = React.createRef()
    
     handleSubmit = e =>{
        e.preventDefault();
        this.props.handleAddPlaylist(this.state.formData)
    }

    //  this.state.playlist.songs.push(response)
     // this.setState(recentlyListening: response)

     handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
     }

    render() { 
        return ( 
            <div>
                <h2>Playlists go here</h2>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="vibe">What's Your Vibe?</label>
                        <input value={this.state.formData.vibe} onChange={this.handleChange} name="vibe" className="form-control" id="exampleFormControlSelect1"></input>
                        {/* <select value={this.state.formData.vibe} onChange={this.handleChange} name="vibe" className="form-control" id="exampleFormControlSelect1">
                        <option name="vibe" value="Bad Ass Bitch">Bad Ass Bitch</option>
                        <option name="vibe" value="Happy">Happy</option>
                        <option name="vibe" value="Moody and Emo">Moody and Emo</option>
                        <option name="vibe" value="Quixotic">Quixotic</option>
                        <option name="vibe" value="Filled with Mirth">Filled with Mirth</option>
                        </select> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name the Playlist:</label>
                        <input value={this.state.formData.name} onChange={this.handleChange} name="name" type="text" className="form-control" id="exampleFormControlInput1"></input>
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-warning"
                    disable={this.state.invalidForm}>Start Playlist</button>
                </form>
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

export default AddPlaylist;