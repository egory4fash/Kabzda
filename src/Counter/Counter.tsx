import React, {useEffect, useState} from "react";


export const Counter = () => {

    let [counter, setCounter] = useState(0)

    console.log('Counter')
    useEffect(() => {
        setInterval( () => {


            setCounter(++counter)
        },1000)

    },[counter])
    return (
        <div>
            Hello {counter}
            {/*<button onClick={() => {*/}
            {/*    setCounter(counter + 1)*/}
            {/*}}> +*/}
            {/*</button>*/}
        </div>
    )
}