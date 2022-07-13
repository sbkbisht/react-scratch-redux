export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED"; // action type

// action creator
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS"; // action type

// action creator
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_IN_SUCCESS = "LOAD_TODOS_IN_SUCCESS"; // action type

// action creator
export const loadTodosInSuccess = (todos) => ({
  type: LOAD_TODOS_IN_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_IN_FAILURE = "LOAD_TODOS_IN_FAILURE"; // action type

// action creator
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_IN_FAILURE,
});
