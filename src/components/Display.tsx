import React, { useState } from 'react';
import '../App.css';

interface Props {
  numOne:string,
  numTwo:string,
  mathOp: string
}

function Display() {

  

  return (
    <div className='display'>
        <div className="first">5000</div>
        <div className="operation">+</div>
        <div className="second">10000</div>
    </div>
  )
}

export default Display;
