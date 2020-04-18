import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "27" },
      { name: "Manu", age: "28" },
      { name: "Stephanie", age: "29" },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: "27" },
        { name: "Manu shi", age: "28" },
        { name: "Stephanie shi", age: "29" },
      ],

    } )
  }

  onChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: "27" },
        { name: "Manu shi", age: "28" },
        { name: "Stephanie shi", age: "29" },
      ],

    } )
  }




  render() {
    const style = {
      backgroundColor: 'white',
      cursor: 'pointer',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    

    return (
      <div className="App">
        <h1>Hey Buddies</h1>
        <button style={style} onClick={() => this.switchNameHandler('Maximilian!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Maximiliiiii')}
          changed={this.onChangeHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
          Hey people
        </Person>
      </div>
    );
  }
}

export default App;
