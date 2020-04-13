import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";


class App extends Component {
    
    state = {
        persons:[
            { name: 'Max', age: 28, hobby: 'football'},
            { name: 'Manu', age: 27, hobby: 'tennis'},
            { name: 'Stephanie', age: 30, hobby: 'basketball'}

        ]
    }

    switchNameHandler = () => {
        console.log('Was Clicked!');
    }
    
    
    
    render() {
        return (
            <div className="App">
                <h1>Hi, I am a React App!</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} hobby={this.state.persons[0].hobby} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} hobby={this.state.persons[1].hobby}>I like Ice creams</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} hobby={this.state.persons[2].hobby} />
            </div>
        )
    }
}

export default App;