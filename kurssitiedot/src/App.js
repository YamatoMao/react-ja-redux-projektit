import './App.css';
import Course from './components/Course';

const App = () => {

  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div className="App">
        <Course course={course} />
        <Total course={course} />
    </div>
  );
}

// Work in progress

const Total = (props) => {
  const totalExercises = props.course.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  );
  return <b>Total of {totalExercises} exercises</b>
}

export default App;
