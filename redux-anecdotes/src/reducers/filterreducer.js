const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.message;
    default:
      return state;
  }
};

export const addFilter = (message) => {
  return {
    type: "SET_FILTER",
    message,
  };
};

export default filterReducer;
