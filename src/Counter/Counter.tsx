import React, {useMemo, useState} from "react";

const generateData = () => {
    console.log("Data")
    return (12)
}


export const Counter = () => {

    const [counter,setCounter] = useState(generateData)

const changer = (state:number) => {
        return state+1
}
    return (
        <div>
            {counter}
            <button onClick={ () => {setCounter(changer)}}> + </button>
        </div>
    )
}