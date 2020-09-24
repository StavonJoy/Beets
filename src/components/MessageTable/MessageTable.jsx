import React from 'react'

import { Link } from 'react-router-dom';

function MessageTable(props, message ) {
    console.log(props.message)
    return (
        <>
            <tbody>
                <tr>
                
                <td>{props.message.topic}</td>
                <td>{props.message.postedBy.name}</td>
                <td>{props.message.replies.length}</td>
                <td>{props.message.createdAt.toLocaleString()}</td>
                <td className="view-link"><Link
                    to={{
                        pathname: '/replies',
                        state: props.message
                    }}
                    >View Message</Link></td>    
                    
                </tr>
            </tbody>
        </>
    )
}

export default MessageTable;
