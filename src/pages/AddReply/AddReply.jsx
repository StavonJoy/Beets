import React, { Component } from 'react';
import './AddReply.css'

class AddReply extends Component {
    state = { 
        invalidForm: true,
        formData: {
            replyMessage: '',
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddReply(this.state.formData, this.props.reply._id)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() { 
        return ( 
            <>
            <div className="AddReply">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                   
                    <div className="row">
                        <textarea name="replyMessage" id="reply-message" type="text" className="active" value={this.state.formData.replyMessage} onChange={this.handleChange} required cols="30" rows="10"></textarea>
                    </div>
                    
                    <button
                    type="submit"
                    className="btn"
                    disabled={this.state.invalidForm}
                    >Add Reply</button>                              
                </form>
                </div>
            </>
         );
    }
}
 
export default AddReply;