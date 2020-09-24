import React from 'react'
import './Replies.css'
import { Link } from 'react-router-dom';
import AddReply from '../AddReply/AddReply'
import Table from 'react-bootstrap/Table'
import ReplyTable from '../../components/ReplyTable/ReplyTable'


function Replies(props, reply, handleDeleteMessage, message, handleUpdateMessage) {
    console.log(props.location.state.replies)
    console.log(props.location.state)
    return (
        <>
            <h1>Replies Page</h1>
            <h4>{props.location.state.topic}</h4>
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
            <h4>Replies</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Reply:</th>
                    <th>Posted By:</th>
                    <th>Date Added:</th>
                    </tr>
                </thead>
                {props.location.state.replies.map((message, idx) =>
                    <ReplyTable 
                        key={reply._id}
                        handleUpdateMessage={props.handleUpdateMessage}
                        reply={props.location.state.replies[idx]}
                        user={props.user}
                    />
                )}
            </Table>
            <AddReply 
                handleUpdateMessage={props.handleUpdateMessage}
                reply={props.location.state}
                messages = {props.messages}
            />
        </>
    )
}

export default Replies;
