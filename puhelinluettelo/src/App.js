import "./App.css";
import { useState } from "react";
import InputField from "./InputField";
import PersonForm from "./PersonForm";
import Person from "./Person";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [haettava, setHaettava] = useState("");
  const [hakutulokset, setHakutulokset] = useState([]);

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewPerson(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  // const handleHaettavaChange = (event) => {
  //   let eventti = event.target.value;
  //   console.log(eventti);
  //   setHaettava(eventti);
  //   setHakutulokset(
  //     persons.filter((person) =>
  //       person.name.toLowerCase().includes(eventti.toLowerCase())
  //     )
  //   );
  //   console.log(results);
  // };

  const handleHaettavaChange = (event) => {
    let eventti = event.target.value;
    console.log(eventti);
    setHaettava(eventti);
    setHakutulokset(
      persons.filter((person) =>
        person.name.toLowerCase().includes(eventti.toLowerCase())
      )
    );
    console.log(persons);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    let personInList = false;
    for (const ihminen of persons) {
      if (newPerson === ihminen.name) {
        personInList = true;
      }
      // } else {
      //   const personObject = {
      //     name: newPerson
      //   };
      //   console.log(personObject);
      //   setPersons(persons.concat(personObject));
      //   data.push(ihminen)
      //   console.log("Moi", persons);
    }

    if (!personInList) {
      const personObject = {
        id: persons.length + 1,
        name: newPerson,
        number: newNumber,
      };
      console.log(personObject);
      setPersons(persons.concat(personObject));
      console.log("Lisätty ihminen", persons);
    }
    // if (!personInList) setPersons([...persons, { name: newPerson, number: newNumber}]);
    else alert(`${newPerson} is already added to phonebook`);
    setNewPerson("");
    setNewNumber("");
  };

  // function asd(param) {
  //   let results = persons.filter((r) => r.name === param);
  //   if (results.length > 0) setNewPerson("");
  //   else setPersons([...persons, { name: newPerson }]);
  //   console.log(results);
  // }

  return (
    <div className="App">
      <section className="addNewPerson">
      <h2>Phonebook</h2>
        <InputField handleHaettavaChange={handleHaettavaChange} haettava={haettava}/>
        <h2>Add new contact</h2>
        <PersonForm addPerson={addPerson} newPerson={newPerson} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
        <h2>Numbers</h2>
        <Person hakutulokset={hakutulokset} persons={persons}/>
      </section>
    </div>
  );
};

export default App;
