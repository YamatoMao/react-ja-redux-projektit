import React from 'react';

const Part = (props) => {
  return (
    <div>
      <hr />
      <p>Part.js toimii.</p>
        {/* {course.parts.map((kurssi) => (
          <li key={kurssi.id}>{kurssi.name}{' ' + kurssi.exercises}</li>
        ))} */}
        <li>{props.course.parts[props.osa].name + ' '}{props.course.parts[props.osa].exercises}</li>
    </div>
  );
};

export default Part;
