import Header from "./Header";

const Course = ({ course }) => {
  return (
    <div>
      <hr />
      <p>Course.js toimii.</p>
      <Header course={course} />
    </div>
  );
};

export default Course;
