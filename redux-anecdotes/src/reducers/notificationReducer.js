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

export const setNotification = (message, interval) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_MESSAGE",
      message,
    });
    let timer = setTimeout(() => {
      dispatch({
        type: "REMOVE_MESSAGE",
        message: "",
      });
    }, interval * 1000);
  };
};

// export const setNotification = (message, interval) => {
//   return async (dispatch) => {

//   }
// }

export default notificationReducer;
