import React from 'react'
import "./MyProfile.css"
import {Link} from 'react-router-dom'

function MyProfile(props, user) {
    return ( 
      <div className="profile">
      <h1 id="logo-1">My Profile</h1>
      <h2>name: {props.user.name}</h2>
      <p>Bio: {props.user.bio}</p>
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
