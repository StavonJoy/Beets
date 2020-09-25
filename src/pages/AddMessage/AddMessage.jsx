import React, { Component } from 'react';
import './AddMessage.css'

class AddMessage extends Component {
    state = { 
        invalidForm: true,
        formData: {
            topic: '',
            post: '',
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddMessage(this.state.formData)
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
            <div className="AddMessage-form">
                <h2>Add Message</h2>
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                    <div className="input-field col s12">
                        <label htmlFor="topic">Topic: </label>
                        <input name="topic" id="topic" type="text" className="active" value={this.state.formData.topic} onChange={this.handleChange} required />
                    </div>
                    </div>
                    <div className="row">
                  
                        <textarea name="post" id="post" type="text" className="active" placeholder="Your post here..." value={this.state.formData.post} onChange={this.handleChange} cols="30" rows="6"></textarea>
                    </div>
                    
                    <button
                    type="submit"
                    className="btn"
                    disabled={this.state.invalidForm}
                    >Add Message</button>                              
                </form>
                </div>
            </>
         );
    }
}
 
export default AddMessage;