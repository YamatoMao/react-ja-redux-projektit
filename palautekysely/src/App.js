import React, {useState, useEffect} from "react";
import './App.css';

const App = () => {

  const [hyva, setHyva] = useState(0); // Hyvää
  const [koht, setKoht] = useState(0); // Kohtalaista
  const [huono, setHuono] = useState(0); // Huonoa
  const [maara, setMaara] = useState(0); // Palautemäärä
  const [positiivinen, setPositiivinen] = useState();
  const [keskiarvo, setKeskiarvo] = useState(0); // Keskiarvo

  const laskeHyva = () => {
    setHyva(hyva+1);
    setMaara(maara+1);
    setKeskiarvo(keskiarvo+1);
  }

  const laskeKoht = () => {
    setKoht(koht+1);
    setMaara(maara+1);
  }

  const laskeHuono = () => {
    setHuono(huono+1);
    setMaara(maara+1);
    setKeskiarvo(keskiarvo-1);
  }

  let tulos = hyva/maara;
  let kesk = (hyva*1) + (huono*-1);

  useEffect(() => {
    setPositiivinen(Math.ceil((tulos)*100));
    setKeskiarvo(kesk);
  });

  return (
    <section>
      <h1>Opiskelijaravintola Pääraide</h1>
      <h4>Onko palvelumme ravintolassa ollut mielestäsi</h4>
      <div id="palaute-nappaimet">
        <button className="button-23" onClick={laskeHyva}>Hyvää</button>
        <button className="button-23" onClick={laskeKoht}>Kohtalaista</button>
        <button className="button-23" onClick={laskeHuono}>Huonoa</button>
      </div>
      <h2>Palautteiden tilastotiedot</h2>
      <div id="palaute-tiedot">
      <p>Hyvää: {hyva}</p>
      <p>Kohtalaista: {koht}</p>
      <p>Huonoa: {huono}</p>
      <p>Palautemäärä: {maara}</p>
      <p>Keskiarvo: {keskiarvo}</p>
      <p>Positiivisen palaute: {positiivinen}%</p>
      </div>
    </section>
  );
}

export default App;