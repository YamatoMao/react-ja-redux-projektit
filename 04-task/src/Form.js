import './Form.css';
import View from './View.js';
import React from 'react';

const Form = () => {
  return (
    <section>
    <form className="Form">
    <h1>Fill the Form</h1>
        <div className="mb-3">
            <label for="firstname" className="fomr-label">First name:</label>
            <input id="firstname" type="text" className="form-control" aria-describedby="firstname"></input>
        </div><br />
        <div className="mb-4">
            <label for="lastname" className="fomr-label">Last name:</label>
            <input id="lastname" type="text" className="form-control" aria-describedby="lastname"></input>
        </div><br />
        <div className="mb-5">
            <label for="phone" className="fomr-label">Phone:</label>
            <input id="phone" type="text" className="form-control" aria-describedby="phone"></input>
        </div><br />
        <div className="mb-6">
            <label for="message" className="fomr-label">Message:</label>
            <input id="message" type="text" className="form-control" aria-describedby="message"></input>
        </div>
    </form>
    <View />
    </section>
  );
}

export default Form;
