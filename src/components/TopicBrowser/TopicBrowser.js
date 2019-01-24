//importing all the other Components I need from their speific files.
import React, { Component } from 'react';
import EvenAndOdds from './../Topics/EvenAndOdd';
import FilterObject from './../Topics/FilterObject';
import FilterString from './../Topics/FilterString';
import Palindrome from './../Topics/Palindrome';
import Custom from './../Topics/Custom';
import Sum from './../Topics/Sum';

class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <h1>Toy Problems</h1>
        <EvenAndOdds />
        finished-
        <FilterObject />
        finished-
        <FilterString />
        unsolved-
        <Palindrome />
        unsolved-
        <Sum />
        unsolved-
        <Custom />
        unsolved-
      </div>
    );
  }
}
export default TopicBrowser;
