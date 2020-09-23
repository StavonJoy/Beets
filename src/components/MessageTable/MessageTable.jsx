import React from 'react'

// import { Link } from 'react-router-dom';

function MessageTable(message) {
    return (
        <>



                <tbody>
                    <tr>
                    <td>{message.topic}</td>
                    <td>{message.postedBy}</td>
                    <td>{message.replies}</td>
                    <td>{message.createdAt}</td>
                    </tr>
                </tbody>

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
