import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28, hobby: "football" },
      { name: "Manu", age: 27, hobby: "tennis" },
      { name: "Stephanie", age: 30, hobby: "basketball" },
    ],
  });

  const switchNameHandler = () => {
    // console.log('Was Clicked!');
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28, hobby: "footballlllllllllll!!!!!" },
        { name: "Manu", age: 27, hobby: "tennisssssssssss!!!!!!" },
        { name: "Stephanie", age: 30, hobby: "basketballllllllllll!!!!!" },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        hobby={personsState.persons[0].hobby}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        hobby={personsState.persons[1].hobby}
      >
        I like Ice creams
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        hobby={personsState.persons[2].hobby}
      />
    </div>
  );
};

export default App;
