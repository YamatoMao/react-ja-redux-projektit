const Person = (props) => {
    let hakutulokset = props.hakutulokset;
    let persons = props.persons;

  return (
    <ul>
      {(hakutulokset.length > 0 ? hakutulokset : persons).map(
        (person, index) => (
          <li key={index}>
            {person.name}, puh. {person.number}
          </li>
        )
      )}
    </ul>
  );
};

export default Person;
