import './App.css';
import React, { useState } from 'react';

const Tulos = props => <div>{props.arvo}</div>

const Nappi = (props) => (
  <button onClick={props.handleClick}>
    {props.teksti}
  </button>
)

const App = () => {
  const [arvo, setArvo] = useState(0)

  const aseta = uusiArvo => {
    setArvo(uusiArvo)
  }

  return (
    <div className="App">
      <Tulos arvo={arvo} />
      <Nappi handleClick={() => aseta(arvo + 1)} teksti="+" />
      <Nappi handleClick={() => aseta(arvo - 1)} teksti="-" />
      <Nappi handleClick={() => aseta(0)} teksti="Nollaa" />
    </div>
  );
}

export default App;
