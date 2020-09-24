import React from 'react';
// import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

function PlaylistDropdown(props) {
    return(

        <Dropdown.Item>{props.song.name}</Dropdown.Item>


    )
}





export default PlaylistDropdown