import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


class App extends Component {
  state = {
    persons: [
      { name: 'Robert', age: 48 },
      { name: 'Paige', age: 14 },
      { name: 'Hailey', age: 13 }
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // Dont do this
    //this.state.persons[0].name = 'Robert Thomas';
    this.setState({
      persons: [
        { name: newName, age: 48 },
        { name: 'Paige', age: 15 },
        { name: 'Hailey', age: 18 }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'RT', age: 48 },
        { name: event.target.value, age: 15 },
        { name: 'Hailey', age: 18 }
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

let persons = null;
if (this.state.showPersons) {
  persons = (
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Rob!')}
        changed={this.nameChangedHandler}>My Hobbies: Walks</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
    </div>
  )
}
    return (
      <div className="App">
       <h1>React App</h1>
       {/*} <button style={style}onClick={() => this.switchNameHandler('Robert Thomas')}>Switch Name</button>*/}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { persons }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));

  }
}

export default App;
