import React from 'react'
import './Replies.css'
import { Link } from 'react-router-dom';
import AddReply from '../AddReply/AddReply'
import Table from 'react-bootstrap/Table'
import ReplyTable from '../../components/ReplyTable/ReplyTable'


function Replies(props, reply) {
    return (
        <>
            <h1 id="logo-1">Replies Page</h1>
            <div className="message-div">
                <h4>{props.location.state.topic}</h4>
                <p>{props.location.state.post}</p>
            </div>
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
            <Table id="table" striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Reply:</th>
                    <th>Posted By:</th>
                    </tr>
                </thead>
                {props.location.state.replies.map((message, idx) =>
                    <ReplyTable 
                        key={reply._id}
                        handleAddReply={props.handleAddReply}
                        reply={props.location.state.replies[idx]}
                        user={props.user}
                    />
                )}
            </Table>
            <div className="addreply-div">
                <h4>Add Reply</h4>
                <AddReply 
                    handleAddReply={props.handleAddReply}
                    reply={props.location.state}
                    messages = {props.messages}
                    user={props.user}
                />
            </div>
        </>
    )
}

export default Replies;
