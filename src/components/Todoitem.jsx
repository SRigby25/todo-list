import React from "react";
function Todoitem(props) {
    let { todo } = props;

    return <div>{todo}</div>;
}

export default Todoitem;