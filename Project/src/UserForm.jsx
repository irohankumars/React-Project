import React from "react";
import { useState } from "react";


export default function App(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(function(prevCount){
            return prevCount+1;
        })
    }

    return (
        <>
        <div>
            <h1>Count : {count}</h1>
            
            <button onClick={handleClick}>Click</button>
            
            
            </div>
        </>
    )

}