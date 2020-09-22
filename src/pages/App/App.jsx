import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import * as messageAPI from '../../services/messages-api'
import * as spotifyService from '../../services/spotifyService'
import LandingPage from '../LandingPage/LandingPage'
import MessageBoard from '../MessageBoard/MessageBoard'
import AddMessage from '../AddMessage/AddMessage'
import SpotifyWebApi from 'spotify-web-api-js'
import SongSearch from '../SongSearch/SongSearch';
import NowPlaying from '../../components/NowPlaying/NowPlaying'
import PlaylistIndex from '../PlaylistIndex/PlaylistIndex'
import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";
import MakePlaylist from '../MakePlaylist/MakePlaylist'
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      spotifyAlbums: [],
      userAlbums: [],
      messages: [],
      user: authService.getUser(),
      spotifyToken: ''
    }
  }

  componentDidMount() {
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(params);
    if (token) {
      this.setState({loggedIn: true})
      spotifyApi.setAccessToken(token);
    }
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/", "https://www.spotify.com/logout/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    this.setState({spotifyToken : hashParams.access_token})
    return hashParams;
  }

  handleAddMessage = async newMessageData => {
    const newMessage = await messageAPI.create(newMessageData);
    newMessage.postedBy = { name: this.state.user.name, _id: this.state.user._id }
    this.setState(state => ({
      messages: [...state.messages, newMessage]
    }), () => this.props.history.push('/messages'));
  }

  handleGetNowPlaying = async newPlayData => {
    const response = await spotifyService.getNowPlaying(newPlayData);
    console.log(response)
    this.setState({nowPlaying: { 
      name: response.item.name, 
      albumArt: response.item.album.images[0].url
    }})
  }

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route exact path='/playlists/add' render={() =>
          <MakePlaylist 
          token={this.state.spotifyToken}/>
        } />
        <Route exact path='/playlists' render={() =>
          <PlaylistIndex />
        } />
        <Route exact path='/songsearch' render={() => 
          <SongSearch />
        }/>
        <Route exact path='/spotifylogin' render={() =>
          <SpotifyLogin />
        } />

        <Route exact path='/' render={() =>
          <LandingPage />
        } />
        <Route exact path='/messages' render={() =>
          <MessageBoard 
          messages = {this.state.messages}
          user={this.state.user}
          />
        } />
        <Route exact path='/messages/add' render={() =>
          <AddMessage 
            handleAddMessage={this.handleAddMessage}
            user={this.state.user}
          />
        } />
        <NowPlaying 
          token = {this.state.spotifyToken} />
      </>
    );
  }
}

export default App;
