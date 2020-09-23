import React from 'react'

import { Link } from 'react-router-dom';

function MessageTable(props, message ) {
    return (
        <>
                <tbody>
                    <tr>
                   
                    <td>{props.message.topic}</td>
                    <td>{props.message.postedBy.name}</td>
                    <td>{props.message.replies.length}</td>
                    <td>{props.message.createdAt.toLocaleString()}</td>
                    <td><Link
                        to={{
                            pathname: '/replies',
                            state: props.message
                        }}
                        >View Message</Link></td>    
                        
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
