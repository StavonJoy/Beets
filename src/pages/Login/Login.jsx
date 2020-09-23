import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import authService from "../../services/authService"

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <main className="Login">
        <div className="login-form">
          <h3>Log In to Your Account</h3>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              className="login-input"
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
              placeholder="Your Email Here"
            />
            {/* <label htmlFor="email">Email</label> */}
            <br></br>
            <input
              className="login-input"
              type="password"
              autoComplete="off"
              id="password"
              value={pw}
              name="pw"
              onChange={this.handleChange}
              placeholder="Your Password here"
            />
            {/* <label htmlFor="password">Password</label> */}
            <br></br>
            <button className="login-btn">Log In</button>&nbsp;&nbsp;&nbsp;
            <br></br>
            <Link className="cancel-btn" to="/">
              Cancel
            </Link>
          </form> 
        </div>
      </main>
    );
  }
}

export default LoginPage;
