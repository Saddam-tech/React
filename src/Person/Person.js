import React from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
      width: 60%;
      margin: 16px auto;
      border: 1px solid #ccc;
      box-shadow: 0 2px 3px gray;
      padding: 16px;
      text-align: center;
  
    "@media (min-width: 500px)": {
      width: "450px",
    },
`;

const person = (props) => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old! I like playing{" "}
        {props.hobby}!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  
  );
};

export default person;
