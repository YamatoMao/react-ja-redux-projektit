const InputField = (props) => {
    let haettava = props.haettava;
    let handleHaettavaChange = props.handleHaettavaChange;

  return (
    <form>
      <label htmlFor="filter">filter shown with: </label>
      <input
        name="filter"
        value={haettava}
        onChange={handleHaettavaChange}
      ></input>
    </form>
  );
};

export default InputField;
