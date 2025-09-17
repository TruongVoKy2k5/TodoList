import { useContext, useState } from "react";
import { TodoContext } from "../App";
export default function TodoItems(){
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(true);
    const addTodo = (text) => {
        setTodos([...todos, {
            id: Date.now(),
            text,
            completed: false
        }]);
    }
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo )
        );
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const updateTodo = (id, newText) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, text : newText} : todo));
    }
}