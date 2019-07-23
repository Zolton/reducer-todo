import React, {useReducer} from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { reducer, initialState } from "./reducers/reducer";
import FormikForm from "./components/ListForm"
import ReactDOM from "react-dom"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addTask = (task) => {
    console.log("addTask prop below")
    dispatch ({type: "ADD_TASK", payload: task})
  }



  const toggleItem = itemId => {
    dispatch({ type: 'TOGGLE_ITEM', payload: itemId });
  };

  const clearPurchased = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_PURCHASED' });
  };



  return (
    <div className="App">
      {console.log("initial state below")}
      {console.log(initialState)}
      {console.log("state below")}
      {console.log(state)}
      Hello from App
      <ToDoList state={state} />
      <FormikForm addTask={addTask} />
    </div>
  );
}

export default App;
