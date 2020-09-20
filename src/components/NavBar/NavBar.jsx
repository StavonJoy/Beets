import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    return(
      <>
        {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="/messages">Message Board</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/playlists">Playlist Index</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/users">Users</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/profile">My Profile</a>
                </li>
                <li class="nav-item">
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
          <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link" href="/messages">Message Board</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/signup">Sign Up</a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href='http://localhost:8888' > Login to Spotify </a>
            </li> */}
            <a href="/"><img className="nav-logo" src="https://i.imgur.com/qx7UQ7E.png" height='66' alt="logo" border="0"/></a>
          </ul>
          </div>
        </nav>
        }
      </>
    )
  }
  export default NavBar;