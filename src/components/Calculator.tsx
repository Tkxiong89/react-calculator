import React, { Component } from 'react';
import Display from './Display';
import '../App.css';

export default class Calculator extends Component {
  render() {
    return <div className='calculator'>
        <Display />
    </div>
  }
}
