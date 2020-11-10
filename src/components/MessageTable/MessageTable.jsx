import React from 'react'

import { Link } from 'react-router-dom';

function MessageTable(props) {

    let timestamp = new Date(props.message.createdAt).toLocaleString()

    return (
        <>
            <tbody>
                <tr>
                    <td>{props.message.topic}</td>
                    <td>{props.message.postedBy.name}</td>
                    <td>{props.message.replies.length}</td>
                    <td>{timestamp}</td>
                    <td 
                        className="view-link">
                            <Link
                            to={{
                                pathname: '/replies',
                                state: props.message
                            }}>
                            View Message
                            </Link></td>
                </tr>
            </tbody>
        </>
    )
}

export default MessageTable;
