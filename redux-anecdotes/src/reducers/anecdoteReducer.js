import anecdoteService from "../services/anecotes";

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    case "NEW_ANECDOTE":
      return [...state, action.data];
    case "INIT_ANECDOTES":
      return action.data;

    default:
      return state;
  }
};

export const addVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.addVote(anecdote);
    dispatch({
      type: "VOTE",
      data: updatedAnecdote,
    });
  };
};

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(content);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export default reducer;
