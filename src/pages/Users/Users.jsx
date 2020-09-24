import React, { Component } from "react";
// import { getAllUsers } from "../../services/userService";
import Card from 'react-bootstrap/Card'
import './Users.css'

class Users extends Component {
  state = {
    // users: [],
  };

  async componentDidMount() {
    // const users = await getAllUsers();
    // this.setState({ users })
  }

  render() {
    return (
      <>
        <h1>Our Amazing Users</h1>
        <div className="users-div">
          {this.props.users.map((user) => (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>Bio Goes Here</Card.Text>
                    <a href="/usersprofile" className="btn btn-primary">{user.name}'s Profile</a>
                </Card.Body>
            </Card>

          ))}
        </div>
      </>
    );
  }
}


export default Users;