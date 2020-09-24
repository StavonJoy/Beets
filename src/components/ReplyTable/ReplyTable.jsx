import React from 'react'

function ReplyTable(props, reply ) {
    console.log(props.reply)
    return (
        <>
            <tbody>
                <tr>
                
                <td>{props.reply.replyMessage}</td>
                <td>{props.reply.postedBy.name}</td>
                <td>{props.reply.createdAt.toLocaleString()}</td>  
                    
                </tr>
            </tbody>
        </>
    )
}

export default ReplyTable;
