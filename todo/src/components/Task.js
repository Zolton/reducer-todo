import React from "react";

function Task(props) {
    console.log(props.task)
  return (
    <>
      <h4>Task: {props.task.task}</h4>
      <h4>Completed?: {props.task.completed ? <h5>yes</h5> : <h5>No</h5>}
      </h4>
    </>
  );
}

export default Task;
