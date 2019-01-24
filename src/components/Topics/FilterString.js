import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: ['joe', 'GiJoe', 'JoeDirt', 'JoeMaMa'],
      userInput: '',
      filteredArray: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  filterNames(userInput) {
    // The-Toy-Problem-Summary: Using a pre-determined array of strings,
    // filter out strings that do not contain a given string. Display a new
    // array populated with the strings that do contain the given string.
    // var names = this.state.names;
    // var filteredNames = [userInput]()
    return true;
  }
  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4> Filter String </h4>
        <span className='puzzleText'>
          Names: {JSON.stringify(this.state.names, null, 10)}
        </span>
        <input
          className='inputLine'
          onChange={e => this.handleChange(e.target.value)}
        />
        <button className='confirmationButton'> Filter </button>
        <span className='resultsBox filterStringRB'>
          Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
