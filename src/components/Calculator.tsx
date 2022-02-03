import React, { Component } from 'react';
import Numbers from './Numbers';
import '../App.css';

export default class Calculator extends Component {
  render() {
    return <div className='calculator'>
        <Numbers />
    </div>
  }
}
