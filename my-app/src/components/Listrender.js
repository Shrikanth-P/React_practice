import React from "react";
import Persons from "./Persons";

function Listrender() {
  const namedList = [
    {
      id: 1,
      name: "shri",
      age: 24,
      skill: ".net",
    },
    {
      id: 2,
      name: "rishi",
      age: 20,
      skill: "java",
    },
    {
      id: 3,
      name: "rick",
      age: 40,
      skill: "AI",
    },
  ];
  const personList = namedList.map((person) => (
    <Persons key={person.id} person={person} /> //key prop cannot access in child components
  ));
  //keys are unquie values in index as key in array of names
  //<h1 key={index}>{name}</h1>
  return <div>{personList}</div>;
}
export default Listrender;
