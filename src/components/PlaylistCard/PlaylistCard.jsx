import React from 'react';
// import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

function PlaylistCard(props, { nowPlayingName, nowPlayingArtist, nowPlayingLink, nowPlayingAlbumArt }) {
    
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
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>Title</Card.Text>
            {props.playlist.songs.map(s =>
                <div>
                    {props.playlists}
                </div>
                )}
            <a href="/usersprofile" className="btn btn-primary">{props.playlist.name}</a>
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