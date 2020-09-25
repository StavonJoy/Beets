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

     handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
     }

    render() { 
        return ( 
            <div className="playlist-form">
                <h2>Playlists go here</h2>
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="vibe">What's Your Vibe?</label>
                        <input value={this.state.formData.vibe} onChange={this.handleChange} name="vibe" className="form-control" id="exampleFormControlSelect1"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name the Playlist:</label>
                        <input value={this.state.formData.name} onChange={this.handleChange} name="name" type="text" className="form-control" id="exampleFormControlInput1"></input>
                    </div>
                    <button 
                    type="submit" 
                    className="btn"
                    disable={this.state.invalidForm}>Start Playlist</button>
                </form>
            </div>
         );
    }
}

export default AddPlaylist;