import React from 'react';
// import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

function PlaylistCard(props) {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.playlist.vibe}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>Title</Card.Text>
            <a href="/usersprofile" className="btn btn-primary">{props.playlist.name}</a>
            <button className='btn btn-warning'>Add To Playlist</button>
        </Card.Body>
    </Card>
    ) 
}

export default PlaylistCard;