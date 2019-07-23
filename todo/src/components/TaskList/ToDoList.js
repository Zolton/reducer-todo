import React from "react";
import Task from "./Task";

function TodoList(props) {
  return props.state.todoArray.map(task => <Task task={task} />);
}

export default TodoList;
