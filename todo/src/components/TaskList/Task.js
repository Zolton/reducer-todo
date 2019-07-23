import React from "react";

function Task(props) {
  console.log("task props");
  console.log(props.task.due);
  // Didn't work


  // let date1 = Date.now();
  // let date2 = Date("2015-7-23T00:18:00");
  // if (props.task.dueDate === "yesterday") {
  //   date2 = Date("2019-7-22T00:00:00");
  // }

  // if (props.task.dueDate === "nextMonth") {
  //   date2 = Date("2019-8-22T00:00:00");
  // }

  // if (props.task.dueDate === "now") {
  //   date2 = Date("2019-7-23T00:18:00");
  // }


  return (
    <>
      <h4>Task: {props.task.task}</h4>
      <h4>
        Completed?: {props.task.completed ? <div>Yes</div> : <div>No</div>}
      </h4>

      {/* {date1 < date2 ? <h3>Overdue!</h3> : <h3> Relax, you've got time</h3>} */}

      <button
        className="complete"
        onClick={() => {
          props.toggleTask(props.task.id);
        }}
      >
        Mark Completed
      </button>
    </>
  );
}

export default Task;
