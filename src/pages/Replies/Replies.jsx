import React from 'react'
import './Replies.css'
import { Link } from 'react-router-dom';


function Replies(props, message, handleDeleteMessage) {
    return (
        <>
            <h1>Replies Page</h1>
            <h1>{props.location.state.topic}</h1>
            <p>{props.location.state.post}</p>
            {props.user && (props.user._id === props.location.state.postedBy._id) &&
                <>
                    <button type="submit" className="btn red" onClick={() => props.handleDeleteMessage(props.location.state._id)}>
                        Delete
                    </button>
                    <Link 
                        className="btn yellow black-text"
                        to={{
                            pathname: '/editmessage',
                            state: props.location.state
                        }}
                    >
                        Edit Message
                    </Link>
                </>
            }
        </>
    )
}

export default Replies;
