import React, { Component } from 'react';

export default class Custom extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    //The problem summary: Using a given string,
    //determine if it is spelt the same backwards as it is forwards.
    return true;
  }
  render() {
    return (
      <div className='puzzleBox palindromePB'>
        <h4> Custom. unfinished </h4>
        <input
          className='inputLine'
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className='confirmationButton'
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          Check
        </button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}
