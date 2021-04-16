import { Component } from "react";
import { Link } from "react-router-dom";
import './WelcomeComponent';

class WelcomeComponent extends Component {
  
  render() {
    return (
      <div className="WelcomeComponent">
        <h1>Welcome {this.props.match.params.name}</h1>
        <div className="container">
          <h5>Manage Your Todos <Link to="/todos">here</Link></h5>
        </div>
      </div>
    )
  }
}

export default WelcomeComponent;