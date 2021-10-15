import React, { useState } from "react";
import Todo from "./Todo";
function TodoList({ list, toggleTodo }) {

    return(
        <>
            <h2>To-Do's list:</h2>
            {list.map((element) => {
                return <Todo key={element.id} item={element} toggleTodo={toggleTodo} />;
            })}
        </>
    );
};

export default TodoList;