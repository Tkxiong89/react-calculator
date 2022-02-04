import React, { Component, createRef, useRef } from 'react';
import Display from './Display';
import '../App.css';

export default class Numbers extends Component {
  state = {
    numOne: "",
    numTwo: "",
    mathOp: "",
    bool: false
  }




  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (!this.state.mathOp) {
      this.setState({ numOne: e.currentTarget.textContent });
    } else {
      this.setState({ numTwo: e.currentTarget.textContent })
    }

  };

  mathOpClicker = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    this.setState({ mathOp: e.currentTarget.textContent })
  };

  equalClick = (): void => {
    this.setState({ bool: !this.state.bool })
  };

  clearDisplay = () => {
    this.setState({
      numOne: "",
      numTwo: "",
      mathOp: "",
      bool: false
    })
  }

  render() {
    return <div className='numbers'>
      <Display numOne={this.state.numOne} numTwo={this.state.numTwo} mathOp={this.state.mathOp} bool={this.state.bool} />
      <div className="num-containers">

        <button className="num one" value={1} onClick={(e) => this.handleClick(e)}>1</button>
        <button className="num two" value={2} onClick={(e) => this.handleClick(e)}>2</button>
        <button className="num three" value={3} onClick={(e) => this.handleClick(e)}>3</button>
        <button className="num four" value={4} onClick={(e) => this.handleClick(e)}>4</button>
        <button className="num five" value={5} onClick={(e) => this.handleClick(e)}>5</button>
        <button className="num six" value={6} onClick={(e) => this.handleClick(e)}>6</button>
        <button className="num seven" value={7} onClick={(e) => this.handleClick(e)}>7</button>
        <button className="num eight" value={8} onClick={(e) => this.handleClick(e)}>8</button>
        <button className="num nine" value={9} onClick={(e) => this.handleClick(e)}>9</button>
        <button className="num zero" value={0} onClick={(e) => this.handleClick(e)}>0</button>

      </div>
      <div className="math-op">
        <button className='math plus' value={"+"} onClick={(e) => this.mathOpClicker(e)}>+</button>
        <button className='math plus' value={"-"} onClick={(e) => this.mathOpClicker(e)}>-</button>
        <button className='math plus' value={"x"} onClick={(e) => this.mathOpClicker(e)}>x</button>
        <button className='math plus' value={"/"} onClick={(e) => this.mathOpClicker(e)}>/</button>
        <button className='math equal' value={"="} onClick={this.equalClick}>=</button>
      </div>
      <div>
        <button className="math clear" onClick={this.clearDisplay}>Clear</button>
      </div>
    </div>;
  }
}
