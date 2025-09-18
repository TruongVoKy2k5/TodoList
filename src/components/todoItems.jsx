    import { useContext, useState } from "react";
    import { TodoContext } from "../App";
    import FilterButton from "./FilterButton";
    export default function TodoItems(){
        const {todos, toggleTodo, deleteTodo, updateTodo} = useContext(TodoContext);
        
        return (
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={FilterTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                ))}
            </ul>
        )
    };

    function TodoItem({todo, toggleTodo, deleteTodo, updateTodo}) {
        const [isEditing, setIsEditing] = useState(false);
        const [editText, setEditText] = useState(todo.text);

        const handleSave = () => {
            if(!editText.trim()) return;
            updateTodo(todo.id, editText);
            setIsEditing(false);
        };
        
        return (
            <li>
            {isEditing ? (
                <>
            <input value={editText} onChange={(e) => setEditText(e.target.value)}/>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button> 
            </>
            ) : (
                <>
                    <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
            </li>    
        );
    }