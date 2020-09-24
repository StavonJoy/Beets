import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

function PlaylistDropdown(props) {
    return(
        <Dropdown.Item>{props.song.name} - {props.song.artist}</Dropdown.Item>
    )
}

export default PlaylistDropdown