import React, { Component } from 'react';

class User extends Component {
  render() {
    const { data: {name, email, age, image} } = this.props;
    return (
      <div>
        <img src={image} alt={name}></img>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>Idade: {age}</p>
      </div>
    );
  }
}

export default User;