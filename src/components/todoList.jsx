import { useContext } from "react";
import {useState} from "react";
import { TodoContext } from "../App";

export default function TodoList(){
    
    const {todos, addTodo, toggleTodo, deleteTodo} = useContext(TodoContext);
    return (
        <ul>
            {todos.map((todo) => 
                (<li key={todo.id}>
                    <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
        ))}
        </ul>
    );
}