import { useContext } from "react";
import { TodoContext } from "../App";
export default function FilterButton(){
    const {todos, filter, setFilter} = useContext(TodoContext);
    const filterTodos = todos.filter((todo) => {
        if(filter === "active") return !todo.completed;
        if(filter === "completed") return todo.completed;
        return true;
    })
    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
    )
}