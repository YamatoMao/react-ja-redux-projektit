import {useState} from "react";
import Nappi from "./Nappi";
import Tulos from "./Tulos";

const Laskuri = () => {
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

export default Laskuri;