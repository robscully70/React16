import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
// import Radium, { StyleRoot } from 'radium';


class App extends Component {
  state = {
    persons: [
      { id: 'fefe', name: 'Robert', age: 48 },
      { id: 'ffdd', name: 'Paige', age: 14 },
      { id: 'ngnt', name: 'Hailey', age: 13 }
    ],
    showPersons: false
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

let persons = null;
if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />
      })}
    </div>
  );
  style.backgroundColor = 'red';
  style[':hover'] = {
    backgroundColor: 'orange',
      color: 'black'
  }
}
// meed to use join to create a space between class names
// let classes = ['red', 'bold'].join(' ');
  const classes = [];
  if (this.state.persons.length <=2) {
    classes.push('red');
  }
  if (this.state.persons.length <= 1) {
    classes.push('bold');
  }
    return (
     //for radium <StyleRoot>
        <div className="App">
        <h1>React App</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        {/*} <button style={style}onClick={() => this.switchNameHandler('Robert Thomas')}>Switch Name</button>*/}
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons }
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));

  }
}

// export default Radium(App);
export default App;
