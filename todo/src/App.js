import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { reducer, initialState } from "./reducers/reducer";

function App() {
  return (
    <div className="App">
      Hello from App
      <ToDoList initialState={initialState} />
    </div>
  );
}

export default App;
