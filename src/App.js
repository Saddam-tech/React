import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
   const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });


  const switchNameHandler = () => {
     
      setPersonsState( {
        persons: [
          { name: 'Maximilian', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 29 }
        ]
      });
    };

  




    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <button onClick = {switchNameHandler}>Switch name</button>
        <Person
         name={personsState.persons[0].name} 
         age={personsState.persons[0].age}>My hobbie is: Racing</Person>
        <Person
         name={personsState.persons[1].name} 
         age={personsState.persons[1].age}>I am a great guy!</Person>
        <Person
         name={personsState.persons[2].name} 
         age={personsState.persons[2].age}>I am a great lady</Person>
      </div>
    );
    // return React.createElement ("h1", {className: "App"}, "");
  }


export default app;



