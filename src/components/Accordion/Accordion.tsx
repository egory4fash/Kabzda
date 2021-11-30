import React from "react";

type AccordionPropsType = {
    title: string;
    setCollapsed: () => void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.title}
                            setCollapsed={props.setCollapsed}
                            collapsed={props.collapsed}

            />

            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    collapsed:boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.setCollapsed()
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
