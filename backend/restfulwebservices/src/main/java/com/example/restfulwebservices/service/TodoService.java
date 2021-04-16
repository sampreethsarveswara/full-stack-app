package com.example.restfulwebservices.service;

import com.example.restfulwebservices.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter  = 0;

    static {
        todos.add(new Todo(++idCounter, "admin", "Learn FrontEnd", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Learn BackEnd", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Learn Databases", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Learn Devops", new Date(), false));
        todos.add(new Todo(++idCounter, "admin", "Learn Art", new Date(), false));
    }

    public List<Todo> getTodos() {
        return todos;
    }

    public Todo deleteTodo(long id) {
        Todo todo = findTodoById(id);
        if(todo==null) {
            return null;
        }
        if(todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findTodoById(long id) {
        for (Todo todo : todos) {
            if(todo.getId()==id) {
                return todo;
            }
        }
        return null;
    }

    public Todo updateTodo(Todo todo) {
        deleteTodo(todo.getId());
        todos.add(todo);
        return todo;
    }

    public Todo createTodo(Todo todo) {
        todo.setId(++idCounter);
        todo.setDone(false);
        todos.add(todo);
        return todo;
    }

}
