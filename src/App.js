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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 60 },
        { name: 'Eugene', age: 3 },
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // get array by value to maintain immutable state
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {
            this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
            })
          }
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler}
            changed={this.nameChangedHandler} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Charlotte!')}
          >My Hobbies: Racing</Person> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
