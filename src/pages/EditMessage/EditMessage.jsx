import React, { Component } from 'react';
import './EditMessage.css'
import { Link } from 'react-router-dom';

class EditMessage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state,
    };

formRef = React.createRef();

handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateMessage(this.state.formData);
  };

handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
    formData,
    invalidForm: !this.formRef.current.checkValidity()
    });
};


render() {
    return (
        <>
            <div className="EditMovie">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="topic" id="topic_name" type="text" className="active" value={this.state.formData.topic} onChange={this.handleChange} required />
                        <label className="active" htmlFor="topic_name">Topic</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="post" id="cast" type="text" className="active" value={this.state.formData.post} onChange={this.handleChange} required/>
                        <label className="active" htmlFor="post">Post</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn green"
                        disabled={this.state.invalidForm}
                    >
                        Update Message
                    </button>
                    <Link 
                        className="btn red"
                        to={{
                            pathname: '/messages'
                        }}
                    >
                    Cancel
                    </Link>                            
                </form>
            </div>
        </>
    )
}
}
export default EditMessage;
