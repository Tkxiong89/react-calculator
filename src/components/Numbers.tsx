import React, { Component } from 'react';
import Display from './Display';
import '../App.css';
export default class Numbers extends Component {
    state = {
        numOne: "",
        numTwo: "",
        mathOp: ""
    }
    
  render() {
    return <div className='numbers'>
            <Display />
            <div className="num-containers">

                <input type="button" className="num one" value={1}/>
                <input type="button" className="num two" value={2}/>
                <input type="button" className="num three" value={3}/>
                <input type="button" className="num four" value={4}/>
                <input type="button" className="num five" value={5}/>
                <input type="button" className="num six" value={6}/>
                <input type="button" className="num seven" value={7}/>
                <input type="button" className="num eight" value={8}/>
                <input type="button" className="num nine" value={9}/>
                <input type="button" className="num zero" value={0}/>

            </div>
            <div className="math-op">
                <input type="button" className='math plus' value={"+"}/>
                <input type="button" className='math plus' value={"-"}/>
                <input type="button" className='math plus' value={"x"}/>
                <input type="button" className='math plus' value={"/"}/>
            </div>
    </div>;
  }
}
