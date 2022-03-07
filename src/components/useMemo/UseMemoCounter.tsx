import React, {useMemo, useState} from "react";

export const UseMemoCounter = (props: any) => {
    const style = {
        border: '1px solid black',
        display: 'flex-column',
        justifyContent: 'center'
    }

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(4)

    let resultA = 1
    let resultB = 1

     resultA = useMemo(() => {
        for (let i = 1;i <= a;i++) {
            resultA *= i
        }
        return resultA
    },[a])



    for (let i = 1;i <= b;i++) {
        resultB *= i
    }

    return (
        <div style={style}>
            <input value={a} onChange={(e) => (setA(Number(e.currentTarget.value)))}/>
            <input value={b} onChange={(e) => (setB(Number(e.currentTarget.value)))}/>
            <hr/>
            <div>result of a: {resultA}</div>
            <div>result of b: {resultB}</div>
        </div>
    )
}