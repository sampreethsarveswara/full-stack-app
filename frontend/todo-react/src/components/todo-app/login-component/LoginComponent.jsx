import React, {Component} from 'react';
import './LoginComponent.css';
import AuthenticationService from '../services/AuthenticationService.js';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'admin',
      showSuccessMessage: false,
      hasLoginFailed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin() {
    if(this.state.username==='admin' && this.state.password==='admin') {
      this.setState({showSuccessMessage: true})
      this.setState({hasLoginFailed: false})
      AuthenticationService.registerLoginDetails(this.state.username, this.state.password);
      this.props.history.push(`/welcome/${this.state.username}`);
    } else {
      this.setState({showSuccessMessage: false})
      this.setState({hasLoginFailed: true})
    }
  }

  render() {
    return (
      <div className="LoginComponent">
        <h1>Login</h1>
        <br></br>
        <div className="container">
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          {/* {this.state.showSuccessMessage && <div>Login Success</div>} */}
          {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials> */}
          {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowSuccessMessage> */}
          Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          <br></br>
          <br></br>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <br></br>
          <br></br>
          <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    )
  }
}

// function ShowSuccessMessage(props) {
//   if(props.showSuccessMessage) {
//     return <div>Login Success</div>
//   }
//   return null;
// }

// function ShowInvalidCredentials(props) {
//   if(props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>
//   }
//   return null;
// }

export default LoginComponent;