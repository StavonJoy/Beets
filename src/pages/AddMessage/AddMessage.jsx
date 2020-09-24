import React, { Component } from 'react';
import './AddMessage.css'

class AddMessage extends Component {
    state = { 
        invalidForm: true,
        formData: {
            topic: '',
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        console.log('submitted')
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
            <div className="AddMessage">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                    <div className="input-field col s12">
                        <input name="topic" id="topic" type="text" className="active" value={this.state.formData.topic} onChange={this.handleChange} required />
                        <label htmlFor="topic">Topic</label>
                    </div>
                    </div>
                    <div className="row">
                        <input name="post" id="post" type="text" className="active" value={this.state.formData.post} onChange={this.handleChange} required rows="4" cols="30"/>
                        <textarea name="post" id="" cols="30" rows="10"></textarea>
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