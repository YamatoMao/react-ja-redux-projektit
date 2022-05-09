import "./App.css";
import React from "react";
import { useState } from "react";

const Button = (props) => {
  return (
    <button className="p1 mr5" onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...he remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
];

const rows = anecdotes.length;

let votingResults = new Array(rows).fill(0, 0, rows);

const App = () => {

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(votingResults);

  function setToRandom(numero) {
    console.log("Tässä numero: ", numero);
    setSelected(numero);
  }

  function randomAnecdote(valittu) {
    console.log("Valittu: ", valittu);
    let randomNumber = Math.floor(Math.random() * anecdotes.length);
    console.log("Random numero: ", randomNumber);
    setToRandom(randomNumber);
  }

  function voteAdding(votingResults, chosenOne) {
    let updatedVotes = [...votingResults];
    updatedVotes[chosenOne]++;
    console.log("Tässä: ", votingResults);
    setVoted(updatedVotes);
    console.log(chosenOne);
  }

  const votePressed = (props) => {
    console.log("Tämä on selected: ", selected);
    let chosenOne = selected;
    let taulukko = votingResults;
    console.log("Votes: ", votingResults);
    taulukko[chosenOne] += 1;
    console.log("Taulukko: ", taulukko);
    votingResults = taulukko;
    console.log("Votes now: ", votingResults);
    voteAdding(votingResults, chosenOne);
  };

  const Results = ({votingResults}) => {
    return (
    <section>
        <p className="anekdootti">"{anecdotes[0]}"</p>
        <p className="aani">{votingResults[0]} ääntä</p>

        <p className="anekdootti">"{anecdotes[1]}"</p>
        <p className="aani">{votingResults[1]} ääntä</p>

        <p className="anekdootti">"{anecdotes[2]}"</p>
        <p className="aani">{votingResults[2]} ääntä</p>

        <p className="anekdootti">"{anecdotes[3]}"</p>
        <p className="aani">{votingResults[3]} ääntä</p>

        <p className="anekdootti">"{anecdotes[4]}"</p>
        <p className="aani">{votingResults[4]} ääntä</p>

        <p className="anekdootti">"{anecdotes[5]}"</p>
        <p className="aani">{votingResults[5]} ääntä</p>

        <p className="anekdootti">"{anecdotes[6]}"</p>
        <p className="aani">{votingResults[6]} ääntä</p>
      </section>
    )
  }

  return (
    <section className="App">
    <h2>To choose an random anecdote, press "Random anecdote"</h2>
        <p>{anecdotes[selected]}</p>
      <Button
        handleClick={() => randomAnecdote(selected)}
        text="Random anecdote"
      />
      <hr />
      <h2>If this is your favourite anecdote, then press "Vote".</h2>
      <Button handleClick={() => votePressed(selected)} text="Vote" />

      <Results votingResults={votingResults} />
      {/* <button onClick={seuraava}>Paina</button> */}
    </section>
  );
};

export default App;
