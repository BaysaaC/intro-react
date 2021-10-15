import React, { useState, useRef } from "react";

function Input(name, handle) {

    return (
        <>
            <input ref={name} type="text" placeholder="Type a new To-Do" />
            <button type="button" onClick={handle} >Add To-do</button>
            <button type="button">Clear Completed To-do's</button>
            <hr />
        </>
    );
}

export default Input;