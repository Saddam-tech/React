import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
// import styled from "styled-components";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ...");

    return (
      // <div className="Person" style={style}>
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years old! I like
          playing {this.props.hobby}!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
