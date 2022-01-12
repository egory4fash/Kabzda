import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import { Select } from './components/Select/Select';

function App() {

    let [value, setValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)

    const onClick = () => {
        alert("234")
    }

    const [selectValue,setSelectValue] = useState(2)

    const onChangeValue = (value:any) => {
        setSelectValue(value)
    }
    return (
        <div className="App">
            <PageTitle title={"CONTROLLED VS UNCONTROLLED"}/>
            CONTROLLED
            <Rating value={value} setValue={setValue}/>
            <Accordion
                title={"Menu"}
                setCollapsed={() => {
                    setCollapsed(!collapsed)}}
                collapsed={collapsed}
                items={[{title:'Egor',value:1},
                    {title:'Dina',value:2},
                    {title:'Anna',value:3}]}
            onClick={onClick}/>
            <OnOff on={on} setOn={setOn}/>
            <Select value={selectValue}  items={[{title:'Minsk',value:1},
                {title:'Kiev',value:2},
                {title:'Moscow',value:3}]}
                    onChangeValue = {onChangeValue}/>
            {/*UNCONTROLLED*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion title={"Menu"}/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}
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
