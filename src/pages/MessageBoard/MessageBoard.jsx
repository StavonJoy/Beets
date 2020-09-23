import React from 'react'
import MessageTable from '../../components/MessageTable/MessageTable'
import Table from 'react-bootstrap/Table'
// import { Link } from 'react-router-dom';
import './MessageBoard.css'

function MessageBoard(props, message) {
    return (
        <>
            <h1>Message Board</h1>
            <a href="/messages/add">Add Message</a>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Topic:</th>
                    <th>Posted By:</th>
                    <th>Replies:</th>
                    <th>Date Added:</th>
                    <th>Details</th>
                    </tr>
                </thead>
                {props.messages.map(message =>
                    <MessageTable 
                        key={message._id}
                        handleDeleteMessage={props.handleDeleteMessage}
                        message={message}
                        user={props.user}
                    />
                )}
            </Table>
            {/* <Link
                to={{
                    pathname: '/replies',
                    state: {message}
                }}
            >
            
            </Link> */}
            {/* <>
            {user && (user._id === tvshow.addedBy._id) &&
                        <button type="submit" className="btn red" onClick={() => handleDeleteTVShow(tvshow._id)}>
                        <i className="material-icons left">delete</i>    
                            Delete TV Show
                        </button>
                        <Link 
                            className="btn yellow black-text"
                            to={{
                                pathname: '/editTV',
                                state: {tvshow}
                            }}
                        ><i className="material-icons left">build</i>
                            Edit TV Show
                        </Link>
                    </> */}
        </>
    )
}
    // return (
    //     <>
    //         <div className='message-board'>
    //             {props.messages.map(message =>
    //                 <MessageTable 
    //                     key={message._id}
    //                     message={message}
    //                     user={props.user}
    //                 />
    //             )}
    //         </div>
    //         <a href="/messages/add">Add Message</a>
    //     </>
    // )


export default MessageBoard;