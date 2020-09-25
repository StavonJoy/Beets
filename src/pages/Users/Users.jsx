import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import './Users.css'

class Users extends Component {
  state = {
    // users: [],
  };

  render() {
    return (
      <>
        <h1 id="logo-1">Our Amazing Users</h1>
        <div className="users-div">
          {this.props.users.map((user) => (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>{user.bio}</Card.Text>
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