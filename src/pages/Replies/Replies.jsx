import React from 'react'
import './Replies.css'

function Replies(props, message, handleDeleteMessage) {
    console.log(props.location.state)
    return (
        <>
            <h1>Replies Page</h1>
            <h1>{props.location.state.topic}</h1>
            <p>{props.location.state.post}</p>
            <button type="submit" className="btn red" onClick={() => props.handleDeleteMessage(props.location.state._id)}>

                Delete
            </button>

        </>
    )
}

export default Replies;