import React, { Component } from 'react'
import "./EditProfile.css"
import {Link} from 'react-router-dom'
// import * as userService from '../../services/userService'

class EditProfile extends Component {
  state = { 
    invalidForm: false,
    formData: this.props.user
   }

  formRef= React.createRef();
  
  handleSubmit = e => {
    e.preventDefault();
    this.handleEditProfile(this.state.formData);
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
      <h1>edit page</h1>
      <form ref={this.formRef} onSubmit={this.handleSubmit}>
        <input name="name" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required></input>
      <button
        type="submit"
        className="btn"
        disabled={this.state.invalidForm}
        >
        Update Profile
      </button>
      </form>
      <Link 
        className="btn red"
        to={{
          pathname: '/myprofile'
        }}
      >
      Cancel
      </Link> 
      </>
     );
  }
}
 
export default EditProfile;