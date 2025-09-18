import { useState, createContext } from 'react'
import './App.css'
import TodoForm from './components/todoForm.jsx';
import TodoItems from './components/todoItems.jsx';
const TodoContext = createContext();
export default function App() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const todoCounter = todos.reduce((total, todo) => {
      if(todo.completed) {
        total.completed++;
      }
      else {
        total.active++;
      }
      total.total++;
      return total;
    }, { total: 0, active: 0, completed: 0 });
    const addTodo = (text) => {
        setTodos([...todos, {
            id: Date.now(),
            text,
            completed: false
        }]);
    }
    const toggleAll = () => {
      const allCompleted = todos.every((todo) => todo.completed);
      if(allCompleted){
        setTodos(todos.map((todo) => ({
          ...todo,
          completed: !allCompleted
        })));
      }
    }
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo )
        );
    }
    const clearCompleted = () => {
      setTodos(todos.filter((todo) => !todo.completed))
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const updateTodo = (id, newText) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, text : newText} : todo));
    }
    const filterTodos = todos.filter((todo) => {
      if(filter === "active") return !todo.completed;
      if(filter === "completed") return todo.completed;
      return true;
    })

  return(
      <TodoContext.Provider value={{todos, addTodo, toggleTodo, deleteTodo, updateTodo, filter, setFilter, filterTodos, todoCounter, clearCompleted, toggleAll}}>
        <div className="app">
          <h1>TO DO APP!</h1>
          <h2>Don't give up! I know you can do it!</h2>
          <TodoForm/>
          <TodoItems/>
        </div>
      </TodoContext.Provider>
  )
}
export {TodoContext};



