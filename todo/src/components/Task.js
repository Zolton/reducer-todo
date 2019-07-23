import React from "react";

function Task(props) {
  console.log(props.task);
  return (
    <>
      <h4>Task: {props.task.task}</h4>
      <h4>Completed?: {props.task.completed ? <div>yes</div> : <div>No</div>}</h4>
    </>
  );
}

export default Task;
