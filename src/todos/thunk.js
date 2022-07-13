// Redux thunk is simply a function that returns another function which contains the actually logic and performance that we want to perform when triggered

import {
  createTodo,
  removeTodo,
  loadTodosInSuccess,
  loadTodosInProgress,
  loadTodosFailure,
} from "./actions";

// how to dispatch thunk, without thunk in redux when we dispatch action then it take type(string, action name) and payload (object, or data to attached)

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosInSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure(e));
    dispatch(displayAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

// it return another function from main function
export const displayAlert = (text) => () => {
  //   alert(`you clicked on: ${text}`);
  alert(text);
};
