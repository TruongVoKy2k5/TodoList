import { useContext } from "react";
import { TodoContext } from "../App";
export default function FilterButton(){
    const {filter, setFilter} = useContext(TodoContext);
    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
    )
}