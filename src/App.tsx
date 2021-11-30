import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    let [value, setValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
    return (
        <div className="App">
            <PageTitle title={"CONTROLLED VS UNCONTROLLED"}/>
            CONTROLLED
            <Rating value={value} setValue={setValue}/>
            <Accordion title={"Controlled"} setCollapsed={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
            <OnOff on={on} setOn={setOn}/>
            UNCONTROLLED
            <UncontrolledRating/>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
