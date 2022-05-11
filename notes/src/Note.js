import React from "react";

const Note = ({note}) => {

  return (
    <section>
      <li>{note.content}</li>
    </section>
  );
};

export default Note;
