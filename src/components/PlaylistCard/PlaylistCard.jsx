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
            {/* {props.playlist.songs[0].link ?
            <a href={props.playlist.songs[0].link}> */}
            <Card.Img variant="top" src={props.playlist.songs[0] !== undefined ? props.playlist.songs[0].albumArt : 'https://i.imgur.com/JAaivc8.png'} />
            {/* </a> 
            :
            <Card.Img variant="top" src={props.playlist.songs[0] !== undefined ? props.playlist.songs[0].albumArt : 'https://i.imgur.com/JAaivc8.png'} />
            } */}
            


            <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown">
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
            

            {props.user._id === props.playlist.createdBy ? 
            <button type="submit" id="button" className="btn" onClick={() => props.handleDeletePlaylist(props.playlist._id)}>
                Delete Playlist</button> 
            : <div></div>
            } 
            {props.nowPlayingNotChecked ?
            <button className='btn' id="button"
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