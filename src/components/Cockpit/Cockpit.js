import React from "react";
import classes from './Cockpit.css'

const cockpit = (props) => {
    
     
    
    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); //assignedClasses = ['red']
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
  
    return (

    <div className={classes.Cockpit}> 
      <h1>Hey Buddies</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.toggle}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
