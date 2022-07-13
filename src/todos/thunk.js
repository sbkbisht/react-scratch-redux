// Redux thunk is simply a function that returns another function which contains the actually logic and performance that we want to perform when triggered

import {
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

// it return another function from main function
export const displayAlert = (text) => () => {
  //   alert(`you clicked on: ${text}`);
  alert(text);
};
