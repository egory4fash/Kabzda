import React from "react";

type AccordionPropsType = {
    title: string;
    setCollapsed: (collapsed:boolean) => void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.title}
                            callBack={props.setCollapsed}
                            collapsed={props.collapsed}

            />

            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    callBack: (collapsed:boolean) => void
    collapsed:boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.callBack(!props.collapsed)
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

export default Accordion;
