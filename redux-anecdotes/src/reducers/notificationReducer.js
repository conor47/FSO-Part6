const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.message;
    case "REMOVE_MESSAGE":
      return action.message;
    default:
      return state;
  }
};

export const createNotification = (message) => {
  return {
    type: "SET_MESSAGE",
    message,
  };
};

export const removeNotification = () => {
  return {
    type: "REMOVE_MESSAGE",
    message: "",
  };
};

export const setNotification = (message, interval) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_MESSAGE",
      message,
    });
    setInterval(() => {
      dispatch({
        type: "REMOVE_MESSAGE",
        message: "",
      });
    }, interval * 1000);
  };
};

export default notificationReducer;
