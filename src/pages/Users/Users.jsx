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
                    <Card.Img variant="top" src={user.image} />
                    <Card.Title className="user">{user.name}</Card.Title>
                    <Card.Text className="user-bio">{user.bio}</Card.Text>
                </Card.Body>
            </Card>

          ))}
        </div>
      </>
    );
  }
}


export default Users;