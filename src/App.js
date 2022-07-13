import React from "react";
import { hot } from "react-hot-loader";
import TodoList from "./todos/ToDoList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default hot(module)(App);
