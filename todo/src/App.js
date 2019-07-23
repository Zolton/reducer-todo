import React, {useReducer} from "react";
import "./App.css";
import ToDoList from "./components/TaskList/ToDoList";
import { reducer, initialState } from "./reducers/reducer";
import FormikForm from "./components/Formik/ListForm"
import ReactDOM from "react-dom"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addTask = (task) => {
    console.log("addTask prop below")
    dispatch ({type: "ADD_TASK", payload: task})
  }



  const toggleTask = taskId => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: taskId });
  };

  const clearPurchased = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_PURCHASED' });
  };



  return (
    <div className="App">
      <h1>ToDo List redux (not that Redux, open a dictionary)</h1>
      <ToDoList state={state} toggleTask={toggleTask} />
      <FormikForm addTask={addTask} />
    </div>
  );
}

export default App;
