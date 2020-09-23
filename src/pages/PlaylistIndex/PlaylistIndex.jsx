import React from 'react'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'
import './PlaylistIndex.css'

function PlaylistIndex(props) {
    return (
        <div className=''>
        {props.playlists.map(playlist =>
            <PlaylistCard 
                key={playlist._id}
                playlist={playlist}
                handleDeleteMovie={props.handleDeleteMovie}
                user={props.user}
            />
        )}
    </div>
    )
}

export default PlaylistIndex;