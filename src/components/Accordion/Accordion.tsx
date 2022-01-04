import React from "react";

type AccordionPropsType = {
    title: string;
    setCollapsed: () => void
    collapsed: boolean
    items: Array<string>
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
    collapsed: boolean
}

type AccordionBodyPropsType = {
    items: Array<string>
}

function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.title}
                            setCollapsed={props.setCollapsed}
                            collapsed={props.collapsed}

            />

            {!props.collapsed && <AccordionBody items={props.items}/>}
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
        props.items.map(i => <li>{i}</li>)


    return (
        <ul>
            {mappedElems}
        </ul>
    )
}

export default Accordion;
