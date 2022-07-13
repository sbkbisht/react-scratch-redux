export const CREATE_TODO = "CREATE_TODO";

// action or action creator
export const createTodo = (text) => {
  return { type: CREATE_TODO, payload: { text } };
};

export const REMOVE_TODO = "REMOVE_TODO";

// action or action creator
export const removeTodo = (text) => {
  return { type: REMOVE_TODO, payload: { text } };
};

// createTodo("go to the store");
