import React from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import Anecdotes from "./components/AnecdoteList";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <AnecdoteForm />
    </div>
  );
};

export default App;
