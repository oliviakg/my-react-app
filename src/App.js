import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

// functional component
const app = (props) => {
  // manages state
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        { name: "Breanne", age: "28" },
        { name: "Olivia", age: "27" }
      ],
    });

    const [otherState] = useState(
      {
        otherState: 'Hey there!'
      });

  // handles events
  const switchNameHandler = () => {
    console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: "Breanne", age: "30" },
        { name: "Diane", age: "54" }
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Welcome!</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <p>{otherState.otherState}</p>
    </div>
  );
}

export default app;