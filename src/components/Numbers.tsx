import React, { Component } from 'react';

export default class Numbers extends Component {
    state = {
       firstNum: 0,
       secondNum: 0,
    }
  render() {
    return <div className='numbers'>
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
            <div className="seven">7</div>
            <div className="eight">8</div>
            <div className="nine">9</div>
            <div className="zero">0</div>
    </div>;
  }
}
