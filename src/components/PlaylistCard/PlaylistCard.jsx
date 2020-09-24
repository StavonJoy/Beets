import React from 'react';
// import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import PlaylistDropdown from '../PlaylistDropdown/PlaylistDropdown'

function PlaylistCard(props) {
    
    const newSong = { 
        name: props.nowPlayingName,
        artist: props.nowPlayingArtist,
        link: props.nowPlayingLink,
        albumArt: props.nowPlayingAlbumArt
    }

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.playlist.vibe}</Card.Title>
            <Card.Text>{props.playlist.name}</Card.Text>
            <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Songs
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        {props.playlist.songs.map((s, idx) =>
                <PlaylistDropdown 
                song={s}
                key={idx}
                playlist={props.playlist}
                />
            )}
                        </Dropdown.Menu>
                        </Dropdown>
            

                
            <button type="submit" className="btn red" onClick={() => props.handleDeletePlaylist(props.playlist._id)}>
                Delete Playlist</button>
            {props.nowPlayingNotChecked ?
            <button className='btn btn-warning' 
            onClick={() => props.handleAddNowPlaying(newSong, props.playlist._id)}
            >Add To Playlist</button>
            :
            <div></div>
            } 
        </Card.Body>
    </Card>
    ) 
}

export default PlaylistCard;