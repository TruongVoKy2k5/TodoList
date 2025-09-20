import { useContext } from "react";
import { TodoContext } from "../App";
export default function FilterButton(){
    const {filter, setFilter} = useContext(TodoContext);
    return (
        <>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("active")}>Active</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>

            <div>
                <button onClick={() => setFilter("high")}>High Priority</button>
                <button onClick={() => setFilter("medium")}>Medium Priority</button>  
                <button onClick={() => setFilter("low")}>Low Priority</button>
            </div>
        </>
    )
}