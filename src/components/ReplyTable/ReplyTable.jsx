import React from 'react'

function ReplyTable(props, reply ) {
    return (
        <>
            <tbody>
                <tr>
                
                <td>{props.reply.replyMessage}</td>
                <td>{props.reply.postedBy}</td>
                    
                </tr>
            </tbody>
        </>
    )
}

export default ReplyTable;
