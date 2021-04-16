import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginComponent from './login-component/LoginComponent';
import LogoutComponent from './logout-component/LogoutComponent';
import WelcomeComponent from './welcome-component/WelcomeComponent';
import ErrorComponent from './error-component/ErrorComponent';
import ListTodosComponent from './list-todos-component/ListTodosComponent';
import HeaderComponent from './header-component/HeaderComponent';
import FooterComponent from './footer-component/FooterComponent';
import CreateTodoComponent from './create-todo-component/CreateTodoComponent';
import AuthenticatedRoute from './services/AuthenticatedRoute';
import UpdateTodoComponent from './update-todo-component/UpdateTodoComponent';

class Todo extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <HeaderComponent></HeaderComponent>
            <Switch>
              <Route path="/" exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <AuthenticatedRoute Route path="/welcome/:name" component={WelcomeComponent}/>
              <AuthenticatedRoute Route path="/todo/:id" component={UpdateTodoComponent}/>
              <AuthenticatedRoute Route path="/todos" component={ListTodosComponent}/>
              <AuthenticatedRoute Route path="/create-todo" component={CreateTodoComponent}/>
              <AuthenticatedRoute Route path="/logout" component={LogoutComponent}/>
              <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent></FooterComponent>
          </div>
        </Router>
      </div>
    )
  }
}

export default Todo;