import React, { useState} from "react";

function TodoForm(props) {
    let { addTodo } = props;

    let [value, setValue] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder="Add To List ..." onChange={(event) => setValue(event.target.value)}
            />
        </form>
    );
}

export default TodoForm;
