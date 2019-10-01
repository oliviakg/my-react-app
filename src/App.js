import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Breanne', age: 30 },
      { name: 'Olivia', age: 25 },
    ],
    otherState: 'some other value',
    showPersons: true
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 60 },
        { name: 'Eugene', age: 3 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 60 },
        { name: 'Eugene', age: 3 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ?
          (<div >
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler}
              changed={this.nameChangedHandler} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Charlotte!')}
            >My Hobbies: Racing</Person>
          </div>) : null
        }
      </div>
    );
  }
}

export default App;
