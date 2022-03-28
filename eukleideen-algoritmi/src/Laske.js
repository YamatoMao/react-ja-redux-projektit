import React, {useState} from 'react';

const Laske = (props) => {
  let luku1 = props.luku1;
  let luku2 = props.luku2;

let tulos;
let R;
  const gcd = (luku1, luku2) => {
    while((luku1 % luku2) > 0) {
      R = luku1 % luku2;
      luku1 = luku2;
      luku2 = R;
      tulos = luku2;
    }
    return tulos;
    }

  return (
    <div>
      <p><span>{gcd(props.luku1, props.luku2)}</span></p>
    </div>
  );
}

export default Laske;
