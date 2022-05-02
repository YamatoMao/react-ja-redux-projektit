import Header from "./Header";
import Total from './Total';

const Course = ({ course }) => {
  return (
    <div>
      <hr />
      <p>Course.js toimii.</p>
      <Header course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
