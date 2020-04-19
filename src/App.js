import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: 'wewe', name: "Max", age: "27" },
      {id: 'rwrw', name: "Manu", age: "28" },
      {id: 'tttg', name: "Stephanie", age: "29" },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "27" },
        { name: "Manu shi", age: "28" },
        { name: "Stephanie shi", age: "29" },
      ],
    });
  };

  onChangeHandler = (event) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });
    
    
    this.setState({
      persons: [
        { name: event.target.value, age: "27" },
        { name: "Manu shi", age: "28" },
        { name: "Stephanie shi", age: "29" },
      ],
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  render() {
    const style = {
      backgroundColor: "white",
      cursor: "pointer",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonsHandler(index)}
                key={person.id }
                changed={(event)=> this.onChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey Buddies</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
