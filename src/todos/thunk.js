// Redux thunk is simply a function that returns another function which contains the actually logic and performance that we want to perform when triggered

// it return another function from main function
export const displayAlert = () => () => {
  alert("Hello");
};

// how to dispatch thunk, without thunk in redux when we dispatch action then it take type(string, action name) and payload (object, or data to attached)