import React, {useState} from 'react';
import Laske from "./Laske";

const Syote = () => { // props

  // const [luvut, setLuvut] = props.hookit;
const [luku1, setLuku1] = useState();
const [luku2, setLuku2] = useState();
const [luvut, setLuvut] = useState();
const [luvut2, setLuvut2] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(luku1, luku2);
    setLuvut(luku1);
    setLuvut2(luku2);
  }

  return (
          <section>
          <form onSubmit={handleSubmit}>
            <input aria-describedby='luku1' id="luku1" type="number" onChange={(e) => setLuku1(e.target.value)} />
            <input aria-describedby='luku2' id="luku2" type="number" onChange={(e) => setLuku2(e.target.value)} />
            
              <button>Lähetä</button>
            
          </form>
          <Laske luku1={luvut} luku2={luvut2} />
          </section>
  );
}

export default Syote;
