import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "wewe11", name: "Max", age: "27" },
      { id: "rwrw22", name: "Manu", age: "28" },
      { id: "tttg33", name: "Stephanie", age: "29" },
      { id: "tttgff44", name: "Stepha", age: "24" },
    ],
    showPersons: false,
  };

  

   

  onChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // An alternative way for the spread operator:
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;





    this.setState( {persons: persons} );
  }
  
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
                key={person.id}
                changed={(event) => this.onChangeHandler(event, person.id)}
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
