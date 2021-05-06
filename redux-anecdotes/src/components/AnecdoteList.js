import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <li>
      {anecdote.content}
      <br></br>
      <span>has {anecdote.votes}</span>
      <button onClick={handleClick}> Vote</button>
    </li>
  );
};

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );

  const addAVote = (anecdote) => {
    dispatch(addVote(anecdote));
    dispatch(setNotification(`you voted : ${anecdote.content}`, 5));
  };

  return (
    <ul>
      {filteredAnecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => addAVote(anecdote)}
          />
        ))}
    </ul>
  );
};

export default Anecdotes;
