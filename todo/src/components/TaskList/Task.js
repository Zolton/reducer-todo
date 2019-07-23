import React from "react";

function Task(props) {
  return (
    <>
      <h4>Task: {props.task.task}</h4>
      <h4>Completed?: {props.task.completed ? <div>yes</div> : <div>No</div>}</h4>
      <button onClick={ ()=>{props.toggleTask(props.task.id)}}>Mark Completed</button>
    </>
  );
}

export default Task;
