import React, {useState} from "react";

type AccordionPropsType = {
    title: string;
}

function Accordion(props: AccordionPropsType) {

    let [toggle, setToggle] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => setToggle(!toggle)}>TOGGLE</button>
            {!toggle && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
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
