import React from 'react'

export default function Todo({ item, toggleTodo }) {
    function handleTodoClick(){
        toggleTodo(item.id)
    }
    return (
        <p>
            <label>
                <input type="checkbox" checked={item.complete} onChange={handleTodoClick} />
                {item.name}
            </label>
        </p>
    );
}
