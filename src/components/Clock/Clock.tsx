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

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    }
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    }

    return (
        <div className={s.clockface}>
            <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-face.png'} alt=""/>
            <div className={s.secondhand} style={secondsStyle}>
                <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-second-hand.png'} alt=""/>
            </div>
            <div className={s.minutehand} style={minutesStyle}>
                <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-minute-hand.png'} alt=""/>
            </div>
            <div className={s.hourhand} style={hoursStyle}>
                <img src={'https://www.kequc.com/articles/f9900770-60b1-408e-a5d0-374da0c0f6b5/256-hour-hand.png'} alt=""/>
            </div>
        </div>
    )
}