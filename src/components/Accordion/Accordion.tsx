import React from "react";
import {v1} from 'uuid'

type AccordionPropsType = {
    title: string;
    setCollapsed: () => void
    collapsed: boolean
    items: Array<ItemType>
    onClick: () => void
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    collapsed: boolean
}

type AccordionBodyPropsType = {
    items: Array<ItemType>,
    onClick: () => void
}

type ItemType = {
    value:any,
    title:string
}

function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.title}
                            setCollapsed={props.setCollapsed}
                            collapsed={props.collapsed}

            />

            {!props.collapsed && <AccordionBody items={props.items} onClick = {props.onClick}/>}
        </div>
    )

}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.setCollapsed()
        }}>{props.title}</h3>
    )
}


function AccordionBody(props: AccordionBodyPropsType) {



    const mappedElems =
        props.items.map(i => <li onClick = {props.onClick} key = {v1()}>{i.title}</li>)


    return (
        <ul>
            {mappedElems}
        </ul>
    )
}

export default Accordion;
