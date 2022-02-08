import './View.css';
import Form from "./Form";

const View = (props) => {
  return (
      <section className="View">
          <h2>This is your input: </h2>
          <p><span>First name: </span>{props.firstName}</p>
          <p><span>Last name: </span>{props.lastName}</p>
          <p><span>Phone: </span>{props.phone}</p>
          <p><span>Message: </span>{props.message}</p>
      </section>
  );
}

export default View;
