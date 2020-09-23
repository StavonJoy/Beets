import React from 'react'
import './Replies.css'

function Replies(props, message) {
    console.log(message)
    return (
        <>
            <h1>Replies Page</h1>
            <h1>{props.location.state.topic}</h1>
            <p>{props.location.state.post}</p>
            {/* <button type="submit" className="btn red" onClick={() => handleDeleteMessage(message._id)}>
                          <i className="material-icons left">delete</i>    
                                Delete Movie

                Delete
            </button> */}

        </>
    )
}

export default Replies;