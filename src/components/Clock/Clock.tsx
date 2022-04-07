import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

type PropsType = any

const timeTo2DigitsFormatter = (value: number) => {
    return value < 10 ? '0' + value : value
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    })

    const hoursString = timeTo2DigitsFormatter(date.getHours())
    const minutesString = timeTo2DigitsFormatter(date.getMinutes())
    const secondsString = timeTo2DigitsFormatter(date.getSeconds())

    return (
        <div className={s.clockface}>
            <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-face.png'} alt=""/>
            <div className={s.secondhand}>
                <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-second-hand.png'} alt=""/>
            </div>
            <div className={s.minutehand}>
                <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-minute-hand.png'} alt=""/>
            </div>
            <div className={s.hourhand}>
                <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-hour-hand.png'} alt=""/>
            </div>
        </div>
    )
}