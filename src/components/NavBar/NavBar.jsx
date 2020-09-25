import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    return(
      <>
        {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="/messages">Beet Forum</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/spotifylogin">Beet Playlists</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/playlists/add">Create A Playlist</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/users">See Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/myprofile">My Profile</a>
                </li>
                <li className="nav-item">
                <a href="/" className="nav-link" onClick={handleLogout}>Log Out</a>
                </li>
                <a href="/"><img className="nav-logo" src="https://i.imgur.com/qx7UQ7E.png" height='66' alt="logo" border="0"/></a>
            </ul>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
          <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/signup">Sign Up</a>
            </li>
            <a href="/"><img className="nav-logo" src="https://i.imgur.com/qx7UQ7E.png" height='66' alt="logo" border="0"/></a>
          </ul>
          </div>
        </nav>
        } 
      </>
    )
  }
  export default NavBar;
