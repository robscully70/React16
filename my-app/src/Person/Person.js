import React, { Component } from 'react';
import './Person.css';
// import Radium, { StyleRoot } from 'radium';

const person = (props) => {
  // const style = {
  //   '@media (max-width: 700px)' : {
  //     width: '200px'
  //   }
  // }
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  )
};

// export default Radium(person);
export default person;