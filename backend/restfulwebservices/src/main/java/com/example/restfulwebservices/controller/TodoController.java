package com.example.restfulwebservices.controller;

import com.example.restfulwebservices.model.Todo;
import com.example.restfulwebservices.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping(value = "/users/{username}/todos")
    public List<Todo> getTodos(@PathVariable String username) {
        return todoService.getTodos();
    }

    @DeleteMapping(value = "/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username,
            @PathVariable long id) {
        Todo todo = todoService.deleteTodo(id);
        if(todo!=null) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
        @PathVariable String username,
        @PathVariable long id,
        @RequestBody Todo todo) {
        Todo updatedTodo = todoService.updateTodo(todo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    @GetMapping(value = "/users/{username}/todos/{id}")
    public Todo getTodo(
            @PathVariable String username,
            @PathVariable long id) {
        return todoService.findTodoById(id);
    }

    @PostMapping(value = "/users/{username}/todos")
    public ResponseEntity<Void> createTodo(
            @PathVariable String username,
            @RequestBody Todo todo) {
        Todo todoCreated = todoService.createTodo(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
