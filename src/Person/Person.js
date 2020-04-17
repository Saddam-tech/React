import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old! I like playing{" "}
        {props.hobby}!
      </p>
      <p>{props.children}</p>
    <input type="text" onChange={props.changed}/>
    
    
    </div>

  );
};

export default person;
