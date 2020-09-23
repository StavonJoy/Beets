import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import * as messageAPI from '../../services/messages-api'
import * as playlistAPI from '../../services/playlists-api'
import * as spotifyService from '../../services/spotifyService'
import * as userService from '../../services/userService'
import LandingPage from '../LandingPage/LandingPage'
import MessageBoard from '../MessageBoard/MessageBoard'
import AddMessage from '../AddMessage/AddMessage'
import SpotifyWebApi from 'spotify-web-api-js'
import SongSearch from '../SongSearch/SongSearch';
// import NowPlaying from '../../components/NowPlaying/NowPlaying'
import PlaylistIndex from '../PlaylistIndex/PlaylistIndex'
import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";
import AddPlaylist from '../AddPlaylist/AddPlaylist'
import Replies from '../Replies/Replies'
import MyProfile from '../MyProfile/MyProfile'
import EditProfile from '../EditProfile/EditProfile'
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      // playlists: [],
      userAlbums: [],
      messages: [],
      user: authService.getUser(),
      spotifyToken: '',
    //   nowPlaying: {
    //     name: 'Not Checked', 
    //     albumArt: '?', 
    //     artist: 'Not Checked',
    //     link: '',
    //     notChecked: false
    // }
    }
  }

  handleAddPlaylist = async newPlaylistData => {
    const newPlaylist = await playlistAPI.create(newPlaylistData);
    newPlaylist.createdBy = { name: this.state.user.name, _id: this.state.user._id }
    this.setState(state => ({
      playlists: [...state.playlists, newPlaylist]
    }), () => this.props.history.push('/playlists'));
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
    console.log(newMessage)
    newMessage.postedBy = { name: this.state.user.name, _id: this.state.user._id }
    this.setState(state => ({
      messages: [...state.messages, newMessage]
    }), () => this.props.history.push('/messages'));
  }


  handleDeleteMessage = async id => {
    if (authService.getUser()) {
      await messageAPI.deleteOne(id);
      this.setState(state => ({
        messages: state.messages.filter(m => m._id !== id)
      }), () => this.props.history.push('/messages'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleShowMessage = async id => {
    console.log('handleshow')
    if (authService.getUser()) {
      await messageAPI.getOne(id);
      this.setState(state => ({
        messages: state.messages.filter(m => m._id !== id)
      }), () => this.props.history.push('/replies'));
    } else {
      this.props.history.push('/login')
    }
  }

  // handleGetNowPlaying = async newPlayData => {
  //   const response = await spotifyService.getNowPlaying(newPlayData);
  //   console.log(response)
  //   console.log(this.props.token)
  //   this.setState({nowPlaying: { 
  //     name: response.item.name, 
  //     albumArt: response.item.album.images[0].url,
  //     artist: response.item.artists[0].name,
  //     link: response.item.external_urls.spotify,
  //     notChecked: true}});


  handleGetNowPlaying = async newPlayData => {
    const response = await spotifyService.getNowPlaying(newPlayData);
    console.log(response)
    this.setState({nowPlaying: { 
      name: response.item.name, 
      albumArt: response.item.album.images[0].url
    }})
  }
  // handleEditProfile = async updatedProfileData => {
  //   const updatedProfile = 

  // }

  async componentDidMount() {
    const messages = await messageAPI.getAll();
    // const playlists = await playlistAPI.getAll();
    this.setState({ messages })
    const stateToken = this.state.spotifyToken
    console.log(stateToken)
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(params);
    if (token) {
      this.setState({loggedIn: true})
      spotifyApi.setAccessToken(token);
    }
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
          authService.getUser()?
          <AddPlaylist 
          handleAddPlaylist={this.handleAddPlaylist}
          user={this.state.user}
          token={this.state.spotifyToken}
          />
          :
          <Redirect to='/login' />
        } />
        <Route exact path='/playlists' render={({history}) =>
          <PlaylistIndex 
            playlists = {this.state.playlists}
            user = {this.state.user}
            history = {history}
            // handleGetNowPlaying={this.handleGetNowPlaying}
            // nowPlayingName = {this.state.nowPlaying.name}
            // nowPlayingArtist = {this.state.nowPlaying.artist}
            // nowPlayingAlbumArt = {this.state.nowPlaying.albumArt}
            // nowPlayingLink = {this.state.nowPlaying.link}
            // nowPlayingNotChecked = {this.state.nowPlaying.notChecked}
             />
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
          handleDeleteMessage = {this.handleDeleteMessage}
          messages = {this.state.messages}
          user={this.state.user}
          />
        } />
        <Route 
          exact path='/replies' 
          render={({ location }) =>
            authService.getUser() ?
          <Replies 
            handleDeleteMessage = {this.handleDeleteMessage}
            messages = {this.state.messages}
            location={location}
            user={this.state.user}
          />:
          <Redirect to='/login' />
        } />
        <Route 
          exact path='/messages/add' 
          render={() =>
            authService.getUser() ?
          <AddMessage 
            handleAddMessage={this.handleAddMessage}
            user={this.state.user}
          />:
          <Redirect to='/login' />
        } />

        {/* <NowPlaying 
          token = {this.state.spotifyToken} /> */}

        <Route 
          exact path='/myprofile'
          render={() => 
            authService.getUser() ?
            <MyProfile 
              users={this.state.users}
              user={user}
            />:
            <Redirect to='/login' />
          } />
        <Route 
          exact path='/editprofile'
          render={({location}) => 
            authService.getUser() ?
            <EditProfile 
              handleEditProfile={this.handleEditProfile}
              location={location}
              users={this.state.users}
              user={user}
            />:
            <Redirect to='/login' />
          } />
      </>
    );
  }
}

export default App;
