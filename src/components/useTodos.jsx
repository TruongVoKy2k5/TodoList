import { useState, useEffect } from "react";
export default function useTodos(filter) {
    const [todos, setTodos] = useState([]);
    

    useEffect (() => {
        const savedTodos = localStorage.getItem("todos");
        if(savedTodos){
            setTodos(JSON.parse(savedTodos));
        }
    }, [])

    useEffect (() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const todoCounter = todos.reduce((total, todo) => {
        if(!todo.completed) {
            total.active++;
        }
        else {
            total.completed++;
        }
        total.total++;
        return total;
    }, {total: 0, completed: 0, active: 0});

    const addTodo = (text, deadline) => {
        setTodos([...todos, {
                id: Date.now(),
                text,
                deadline,
                completed: false
            }]);
    }

    const toggleAll = () => {
       const allCompleted = todos.every((todo) => !todo.completed)
       setTodos(todos.map(todo => ({...todo, completed: !allCompleted})));
    }
    
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const clearCompleted = (id) => {
        setTodos(todos.filter((todo) => !todo.completed));
    }

    const updateTodo = (id, newText) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo));
    }

    const filterTodos = todos.filter((todo) => {
        if(filter === "active") return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true;
    })

    return {
        todos, filter, addTodo, todoCounter, filterTodos, updateTodo, deleteTodo, toggleTodo, toggleAll, clearCompleted
    }
}