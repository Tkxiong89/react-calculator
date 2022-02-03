import React, { useState } from 'react';

function Display() {

    const [numOne, setNumOne] = useState<string>("");
    const [numTwo, setNumTwo] = useState<string>("");
    const [mathOp, setMathOp] = useState<string>("");

  return (
    <div className='display'>
        <input type="text" value={numOne} onChange={ (e)=> setNumOne(e.target.value)}/>
        <p className='math-op'>test</p>
        <h3 className='second'>World</h3>
    </div>
  )
}

export default Display;
