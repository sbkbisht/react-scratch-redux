import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { loadTodos, removeTodoRequest } from "./thunk";
import { markTodoAsCompleted } from "./actions";
import { displayAlert } from "./thunk";
import "./TodoList.css";
import { isLoading } from "./reducers";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlertClicked,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  //   onRemovePressed: (text) => dispatch(removeTodo(text)),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  // using thunk
  //this is going to be a function, doesn't take any argument as argument not passed inside thunk.js displayAlert()
  // you can pass argument if you want
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
