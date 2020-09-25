import React, { Component } from 'react'
import "./EditProfile.css"
import {Link} from 'react-router-dom'

class EditProfile extends Component {
  state = { 
    invalidForm: false,
    formData: this.props.user
   }

  formRef= React.createRef();
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleEditProfile(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
    formData,
    invalidForm: !this.formRef.current.checkValidity()
    });
};
  render() { 
    console.log(this.state.formData)
    return ( 
      <>
      <div className="editprofile-form">
      <h1>Edit your profile</h1>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div className="name">
            <label for="name">Name:</label>
            <input name="name" id="name" type="text" value={this.state.formData.name} onChange={this.handleChange} required></input>
          </div>
          <div className="bio">
            <label for="bio">Bio:</label>
            <input name="bio" id="bio" type="text" value={this.state.formData.bio} onChange={this.handleChange}></input>
          </div>
          <div className="profilepic">
            <label for="image">Profile picture:</label>
            <input name="image" id="image" type="text" value={this.state.formData.image} onChange={this.handleChange}></input>
          </div>
        <button
          type="submit"
          className="btn"
          disabled={this.state.invalidForm}
          >
          Update Profile
        </button>
        <Link 
          className="btn red"
          to={{
            pathname: '/myprofile'
          }}
          >
        Cancel
        </Link> 
        </form>
      </div>
      </>
     );
  }
}
 
export default EditProfile;