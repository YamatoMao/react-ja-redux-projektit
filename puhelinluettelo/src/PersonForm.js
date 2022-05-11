const PersonForm = (props) => {

    let addPerson = props.addPerson;
    let newPerson = props.newPerson;
    let handlePersonChange = props.handlePersonChange;
    let newNumber = props.newNumber;
    let handleNumberChange = props.handleNumberChange;

    return (
        <form onSubmit={addPerson}>
          <label htmlFor="name">name: </label>
          <input name="name" value={newPerson} onChange={handlePersonChange} />
          <br />
          <label htmlFor="number">number: </label>
          <input
            name="number"
            value={newNumber}
            onChange={handleNumberChange}
          ></input>
          <br />
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
    )
}

export default PersonForm;