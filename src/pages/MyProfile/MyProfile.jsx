import React from 'react'
import "./MyProfile.css"
import {Link} from 'react-router-dom'

function MyProfile(props, user) {

    return ( 
      <div className="profile">
        <h1 id="logo-1">My Profile</h1>
        <img src={props.user.image} alt=""/>
        <h2>Name: {props.user.name}</h2>
        <h4>Bio: {props.user.bio}</h4>
          <Link
            className="btn"
            to={{
                pathname: '/editprofile',
                state: {user}
            }}
          >
            Edit Profile</Link>
      </div>
     );
}

export default MyProfile;
