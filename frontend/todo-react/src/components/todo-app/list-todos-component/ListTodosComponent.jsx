import { Component } from "react";
import TodoService from '../api/todo/TodoService.js';
import AuthenticationService from '../services/AuthenticationService';

class ListTodosComponent extends Component {

  constructor(props) {
    super(props)
    this.state ={
      todos: []
    }

    this.deleteTodo = this.deleteTodo.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    this.refreshTodos(username);
  }

  deleteTodo(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodoService.deleteTodo(username, id).then(
      response => {
        this.setState({message: 'Delete Successful'})
        this.refreshTodos(username);
        this.setState({message: null})
      }
    )
  }

  refreshTodos(username) {
    TodoService.getAllTodos(username).then(response =>{
      console.log(response);
      this.setState({ todos: response.data })
    })
  }

  updateTodo(id) {
    this.props.history.push(`/todo/${id}`);
  }

  render() {
    return (
      <div>
        <h1> Todos </h1>
        {this.state.message && <div className="btn btn-success">Deleted</div>}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>TargetDate</th>
                <th>isDone?</th>
                <th>Update</th>
                <th>Delte</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.todos.map(
                  todo =>
                    <tr key={todo.id}>
                      <td>{todo.description.toString()}</td>
                      <td>{todo.targetDate.toString()}</td>
                      <td>{todo.done.toString()}</td>
                      <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                      <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListTodosComponent;