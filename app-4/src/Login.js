import React, { Component } from 'react';


class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: ' ',
      password: ' '
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(name) {
    this.setState({ username: name });
  }

  handlePasswordChange(pass) {
    this.setState({ password: pass });
  }

  handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input type='text' onChange={e => this.handleUsernameChange(e.target.value)}></input>
        <input type='text' onChange={e => this.handlePasswordChange(e.target.value)}></input>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
