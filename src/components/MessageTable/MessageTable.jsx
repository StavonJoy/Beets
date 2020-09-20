import React from 'react'
import Table from 'react-bootstrap/Table'
// import { Link } from 'react-router-dom';

function MessageTable(message) {
    return (
        <>
            <h1>Message Board</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Topic:</th>
                    <th>Posted By:</th>
                    <th>Replies:</th>
                    <th>Date Added:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{message.topic}</td>
                    <td>{message.postedBy.name}</td>
                    <td>{message.replies.length}</td>
                    <td>{message.dateAdded}</td>
                    </tr>
                </tbody>
            </Table>
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

export default MessageTable;