import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }
  switchNameHandler = () => {
    // console.log('Was Clicked!');
    this.setState( {
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }
  
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].name}>My hobbie is: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name}>I am a great guy!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name}>I am a great lady</Person>
      </div>
    );
    // return React.createElement ("h1", {className: "App"}, "");
  }
}

export default App;
