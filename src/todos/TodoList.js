import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { removeTodo, markTodoAsCompleted } from "./actions";
import { displayAlert } from "./thunk";
import "./TodoList.css";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlertClicked,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
        // simple example of use thunk middleware
        // onCompletedPressed={onDisplayAlertClicked}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  // using thunk
  //this is going to be a function, doesn't take any argument as argument not passed inside thunk.js displayAlert()
  // you can pass argument if you want
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
