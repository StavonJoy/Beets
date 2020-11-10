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
import * as userService from '../../services/userService'
import LandingPage from '../LandingPage/LandingPage'
import MessageBoard from '../MessageBoard/MessageBoard'
import AddMessage from '../AddMessage/AddMessage'
import SpotifyWebApi from 'spotify-web-api-js'
import PlaylistIndex from '../PlaylistIndex/PlaylistIndex'
import SpotifyLogin from "../SpotifyLogin/SpotifyLogin";
import AddPlaylist from '../AddPlaylist/AddPlaylist'
import Replies from '../Replies/Replies'
import MyProfile from '../MyProfile/MyProfile'
import EditProfile from '../EditProfile/EditProfile'
import EditMessage from '../EditMessage/EditMessage'
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      userAlbums: [],
      messages: [],
      user: authService.getUser(),
      spotifyToken: '',
      // playlists: [],
      users: []
    }
  }

  handleAddPlaylist = async newPlaylistData => {
    const newPlaylist = await playlistAPI.create(newPlaylistData);
    newPlaylist.createdBy = { name: this.state.user.name, _id: this.state.user._id }
    this.setState(state => ({
      playlists: [...state.playlists, newPlaylist]
    }), () => this.props.history.push('/spotifylogin'));
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

  handleUpdateMessage = async updatedMessageData => {
    const updatedMessage = await messageAPI.update(updatedMessageData);
    const newMessagesArray = this.state.messages.map(m => 
      m._id === updatedMessage._id ? updatedMessage : m
    );
    this.setState(
      {messages: newMessagesArray},
      () => this.props.history.push('/messages')
    );
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

  handleAddReply = async (updatedMessageData, messageId) => {
    const updatedMessage = await messageAPI.reply(updatedMessageData, messageId);
    const newMessagesArray = this.state.messages.map(m =>
      m._id === updatedMessage._id ? updatedMessage : m
    );
    this.setState(
      { messages: newMessagesArray },
      () => this.props.history.push('/messages')
    );
  }

  handleEditProfile = async updatedUserData => {
    const updatedUser = await userService.update(updatedUserData);
    // const newUsersArray = this.state.users.map(u => 
    //   u._id === updatedUser._id ? updatedUser : u
    // );
    this.setState(
      {user: updatedUser},
      () => this.props.history.push('/myprofile')
    );
  }

  async componentDidMount() {
    const messages = await messageAPI.getAll();
    const playlists = await playlistAPI.getAll();
    const users = await userService.getAllUsers();
    this.setState({ messages: messages.reverse() })
    this.setState({ users })
    this.setState({ playlists })
    const stateToken = this.state.spotifyToken
    const params = this.getHashParams();
    const token = params.access_token;
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
          render={() => (user ? 
          <Users 
          users={this.state.users}/> 
          : 
          <Redirect to="/login" />)}
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
             />
        } />
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
            handleAddReply={this.handleAddReply}
            messages = {this.state.messages}
            location={location}
            users={this.state.users}
            user={this.state.user}
          />:
          <Redirect to='/login' />
        } />
        <Route
          exact path='/editmessage' 
          render={({ location }) =>
            authService.getUser() ?
              <EditMessage
                handleUpdateMessage={this.handleUpdateMessage}
                location={location}
                user={this.state.user}
              />
              :
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
        <Route 
          exact path='/myprofile'
          render={() => 
            authService.getUser() ?
            <MyProfile 
              // users={this.state.users}
              user={this.state.user}
            />:
            <Redirect to='/login' />
          } />
        <Route 
          exact path='/editprofile'
          render={({ location }) => 
            authService.getUser() ?
            <EditProfile 
              handleEditProfile={this.handleEditProfile}
              location={location}
              // users={this.state.users}
              user={this.state.user}
            />:
            <Redirect to='/login' />
          } />
      </>
    );
  }
}

export default App;
