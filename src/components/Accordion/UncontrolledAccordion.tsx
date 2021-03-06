import React, {useReducer} from "react";
import AccordionReducer from "./AccordionReducer";

type AccordionPropsType = {
    title: string;
}

export type ActionType = {
    type:string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // let [toggle, setToggle] = useState(false)
    let[state, dispatch] = useReducer(AccordionReducer,{collapsed:false})

    return (
        <div>
            <AccordionTitle title={props.title} callBack={() => {
                dispatch({type:"TOGGLE-COLLAPSED"})
            }}/>

            {!state.collapsed && <AccordionBody/>}
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
