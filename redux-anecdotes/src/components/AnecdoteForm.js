import React from "react";
import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";
import {
  createNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(newAnecdote(content));
    dispatch(createNotification(`${content} was created`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  return (
    <form onSubmit={addAnecdote}>
      <div>
        <input name="anecdote" />
      </div>
      <button>create</button>
    </form>
  );
};

export default AnecdoteForm;
