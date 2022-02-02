import React, {useReducer, useState} from "react";
import {reducer} from "./AccordionReducer";

type AccordionPropsType = {
    title: string;
}

export type ActionType = {
    type:string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // let [toggle, setToggle] = useState(false)
    let [toggle, dispatch] = useReducer(reducer,false)

    return (
        <div>
            <AccordionTitle title={props.title} callBack={() => {
                dispatch({type:"TOGGLE-COLLAPSED"})
            }}/>

            {!toggle && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.callBack()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;
