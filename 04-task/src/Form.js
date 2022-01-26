import './Form.css';
import './View.js';

const Form = () => {
  return (
    <section className="Form">
    <form>
        <div className="mb-3">
            <label for="firstname" className="fomr-label">Labelin nimi</label>
            <input id="firstname" type="text" className="form-control" aria-describedby="firstname"></input>
        </div>
        <div className="mb-4">
            <label for="lastname" className="fomr-label">Labelin nimi</label>
            <input id="lastname" type="text" className="form-control" aria-describedby="lastname"></input>
        </div>
        <div className="mb-5">
            <label for="phone" className="fomr-label">Labelin nimi</label>
            <input id="phone" type="text" className="form-control" aria-describedby="phone"></input>
        </div>
        <div className="mb-6">
            <label for="message" className="fomr-label">Labelin nimi</label>
            <input id="message" type="text" className="form-control" aria-describedby="message"></input>
        </div>
    </form>
        <View />
    </section>
  );
}

export default Form;
