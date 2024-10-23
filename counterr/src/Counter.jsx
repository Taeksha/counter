import { useState } from 'react';
import './style.css'

function Counter() {


    const [counter, setCounter] = useState(0)
    function increement() {
        setCounter(counter + 1);
    }
    function decreement() {
        setCounter(counter - 1);
    }
    function reset() {
        setCounter(0);
    }
    return (
        <div className='counter'>

            <h1>COUNTER</h1>
            <h1>{counter}</h1>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%",  }}>
                <button onClick={decreement} style={{backgroundColor :"red"}}>-</button>

                <button  onClick={reset} style={{backgroundColor :"yellow"}} >reset</button>
                <button  onClick={increement}>+</button>
                
            </div>
        </div>
    )
}

export default Counter