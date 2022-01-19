import './App.css';

const user = {
  firstName: "Matti",
  lastName: "Meikäläinen"
}

const formatName = () => {
  return user.firstName + ' ' + user.lastName
}

const Element = () => {
  if (user.firstName === "Matti") {
  return (
    <section>
    <h1>Hello, {formatName(user)}</h1>
    <p>Good to see You here!</p>
    </section>
  )
  } else {
    return (
      <h1>Hello, stranger!</h1>
    )
  }
}

const App = () => {
  return (
    <div className="App">
      <Element />
    </div>
  );
}

export default App;