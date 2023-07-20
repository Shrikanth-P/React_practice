import React from "react";

function Persons({ person, key }) {
  return (
    <div>
      <h1>
        I am {person.name}. I am {person.age} years old and skilled in{" "}
        {person.skill} and {key}
      </h1>
    </div>
  );
}
export default Persons;
