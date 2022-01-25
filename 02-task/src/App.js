import './App.css';
import './person/Person.js'
import Person from './person/Person.js';

const persons = ["Max", "Nick", "John", 18, 20, 30]

const App = () => {
  return (
    <div className="App">
      <h1>React app putsattu!</h1>
      <Person name={persons[0]} age={persons[3]}/>
      <Person name={persons[1]} age={persons[4]}/>
      <Person name={persons[2]} age={persons[5]}/>
    </div>
  );
}

export default App;

/*git add .
git commit -m "Komentti"
git branch -M main
git push origin main */
