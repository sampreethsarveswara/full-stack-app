import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthenticationService from '../services/AuthenticationService.js';

class HeaderComponent extends Component {
  render() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (  
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><Link to="/" className="navbar-brand" style={{color: 'white'}}>Todo Manager</Link></div>
            <ul className="navbar-nav">
              {isUserLoggedIn && <li><Link className="nav-link" to='/welcome/admin'>Home</Link></li>}
              {isUserLoggedIn && <li><Link className="nav-link" to='/todos'>Todos</Link></li>}
              {isUserLoggedIn && <li><Link className="nav-link" to='/create-todo'>Create Todo</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && <li><Link className="nav-link" to='/login'>Login</Link></li>}
              {isUserLoggedIn && <li><Link className="nav-link" to='/logout' onClick={AuthenticationService.removeLoginDetails}>Logout</Link></li>}
            </ul>
          </nav>
        </header>  
    )
  }
}

export default withRouter(HeaderComponent);