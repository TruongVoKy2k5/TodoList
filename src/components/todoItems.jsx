        import { useContext, useState } from "react";
        import { TodoContext } from "../App";
        import FilterButton from "./FilterButton";
        export default function TodoItems(){
            const {todos, toggleTodo, deleteTodo, updateTodo, filterTodos, todoCounter, clearCompleted, toggleAll} = useContext(TodoContext);
            return (
                <div>
                    <FilterButton/>
                    {todos.length > 0 && (
                        <label>
                            <input type="checkbox" checked={todos.every(todo => todo.completed)} onChange={toggleAll} />
                            Select All
                        </label>
                    )}
                    {todoCounter.total > 0 && <p>Total: {todoCounter.total}</p>}
                    {todoCounter.active > 0 && <p>Active: {todoCounter.active}</p>}
                    {todoCounter.completed > 0 && <p>Completed: {todoCounter.completed}</p>}
                    <button onClick={() => clearCompleted(todo.id)}>Clear all the completed task!</button>
                <ul>
                    {filterTodos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                    ))}
                </ul>

                </div>
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