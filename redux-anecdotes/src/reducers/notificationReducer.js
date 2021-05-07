const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.message;
    case "REMOVE_MESSAGE":
      return null;
    default:
      return state;
  }
};

// export const setNotification = (message, interval) => {
//   return async (dispatch) => {
//     dispatch({
//       type: "SET_MESSAGE",
//       message,
//     });
//     let timer = setTimeout(() => {
//       dispatch({
//         type: "REMOVE_MESSAGE",
//         message: "",
//       });
//     }, interval * 1000);
//   };
// };

let timeoutId;

export const setNotification = (message, interval) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_MESSAGE",
      message,
    });

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      dispatch({
        type: "REMOVE_MESSAGE",
      });
    }, interval * 1000);
  };
};

export default notificationReducer;
