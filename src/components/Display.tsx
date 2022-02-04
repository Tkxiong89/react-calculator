import React, { useState } from 'react';
import '../App.css';

interface Props {
  numOne:string,
  numTwo:string,
  mathOp: string,
  bool: boolean
}

function Display({ numOne, numTwo, mathOp, bool }:Props) {
  
  const mathCalculate = (one:string, two:string, operation:string):number => {
    let firstNum:number = parseInt(one);
    let secondNum:number = parseInt(two);
    let sum:number = 0;
    switch(operation) {
      case '+':
        sum = firstNum + secondNum;
        break;
      case '-': 
        sum = firstNum - secondNum;
        break;
      case 'x': 
      sum = firstNum * secondNum;
        break;
      case '/': 
        sum = firstNum / secondNum;
        break;
    }
    return sum;
  }

  return (
    
    <div className='display'>
     { !bool ?
     <>
       <div className="first">{ numOne }</div>
       <div className="operation">{ mathOp }</div>
       <div className="second">{ numTwo }</div> 
     </>
      : <>
          <div>{mathCalculate(numOne, numTwo, mathOp) }</div>  
        </>
     }
    </div> 
  )
}

export default Display;
