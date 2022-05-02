const Total = (props) => {
    const totalExercises = props.course.parts.reduce(
      (prevValue, currentValue) => prevValue + currentValue.exercises,
      0
    );
    return <b>Total of {totalExercises} exercises</b>;
  };

export default Total;