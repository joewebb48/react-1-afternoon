import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12
        },
        {
          name: 'Jeremy Scrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carley Armstrong',
          title: 'CEO'
        }
      ],
      userInput: '',
      filteredEmployee: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  // Using a pre-determined array of objects,
  //   filter out objects that do not have a given property.
  //   Display a new array populated with the objects that do have the given property.

  //filter array - done.
  //test object properties
  //filter out object that do not have propert.
  //..a property is object.property...... //person.age
  //make new array
  //dispay new array that have property
  //
  //
  //

  filterEmployee(prop) {
    console.log('this is a prop', prop);
    //anything that is typed into the input box is passed to this method as props.
    //i need to compare the prop being passed in, to the property on an object.
    //Q. what object? A. employees on state. = this.state.employees?
    //logging this.state.employees returns 3 objects.
    //Q..can i log employees.name? employees.title?
    //A. it returns as undfined..? why?
    //Q. can i log employees[0]?
    //A. yes i can. it returns {name: 'Jimmy Joe', title: 'Hack0r', age: 12}
    console.log('employees obj', this.state.employees[0]['title']);
    //now i need to compare the props being passed in to the props on this object which would be what?
    //name and title...how do i log that??
    // Q. can i log this.state.employee[0][name]?
    // A. ["name"].. will work.[name] is undefined.
    //
    // taken me forever.. but i think i have all the pieces i need.
    // this.state.employees[0]["name"] needs to be equal to the prop that is being passed in.
    //
    //TOY PROBLEM
    //
    // Using a pre-determined array of objects,
    // filter out objects that do not have a given property.
    //Display a new array populated with the objects that do
    // have the given property.
    //
    //Q. what do i need?
    // A.
    var employees = this.state.employees;
    var filteredEmployees = [];

    for( var i = 0; i < employees.length; i++){
        if(employees[i].hasOwnProperty(prop)){
            filteredEmployees.push(employees[i])
        }
    }
    this.setState({filteredEmployees: filteredEmployees})

  }

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>

        <span className='puzzleText'>
          Origional: {JSON.stringify(this.state.employees, null, 10)}
        </span>

        <input
          className='inputLine'
          onChange={e => this.handleChange(e.target.value)}
        />

        <button
          className='confirmationButton'
          onClick={() => this.filterEmployee(this.state.userInput)}
        >
          Filter
        </button>

        <span className='results filterObjectRB'>
          Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}
        </span>
      </div>
    );
  }
}
