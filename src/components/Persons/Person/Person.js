import React, { Component } from "react";
import classes from "./Person.css";
// import styled from "styled-components";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ...");

    return (
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old! I like playing{" "}
          {this.props.hobby}!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
