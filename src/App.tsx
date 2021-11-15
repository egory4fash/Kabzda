import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <PageTitle title={"My Friends"}/>
            article1
            <Rating />
            <Accordion title={"Menu"} />
            <Accordion title={"Users"} />
            article2
            <Rating />
            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType= {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
