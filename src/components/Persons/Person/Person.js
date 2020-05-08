import React from "react";
import classes from "./Person.css";
// import styled from "styled-components";

const person = (props) => {
  console.log('[Person.js] rendering ...');
  // const rdn = Math.random();

  // if ( rdn > 0.7 ) {
  //   return new Error('Something went wrong');
  // }
  
  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old! I like playing{" "}
        {props.hobby}!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;