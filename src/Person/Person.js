import React from "react";
import './Person.css';
import Radium from "radium";

const person = (props) => {
  return (
    <div className="Person" onClick={props.click}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old! I like playing{" "}
        {props.hobby}!
      </p>
      <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    
    
    </div>

  );
};




export default Radium(person);
