import axios from 'axios';

class TodoService {

    getAllTodos(username) {
        return axios.get(`http://localhost:8081/users/${username}/todos`);
    }

    deleteTodo(username, id) {
        return axios.delete(`http://localhost:8081/users/${username}/todos/${id}`);
    }

    updateTodo(username, id) {
        return axios.get('');
    }

    getTodo(username, id) {
        return axios.get(`http://localhost:8081/users/${username}/todos/${id}`);
    }
}

export default new TodoService()