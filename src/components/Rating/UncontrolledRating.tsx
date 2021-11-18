import React, {useState} from "react";

type UncontrolledRatingPropsType = {

    //value: 0|1|2|3|4|5;
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    let [value, setValue] = useState(0)

    return (
        <div>

            <Star id={1} selected={value > 0} callBack={setValue}/>
            <Star id={2} selected={value > 1} callBack={setValue}/>
            <Star id={3} selected={value > 2} callBack={setValue}/>
            <Star id={4} selected={value > 3} callBack={setValue}/>
            <Star id={5} selected={value > 4} callBack={setValue}/>

        </div>)

}

type StarPropsType = {
    id: 1 | 2 | 3 | 4 | 5
    selected: boolean;
    callBack: (value: 0 | 1 | 2 | 3 | 4 | 5) => void

}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.callBack(props.id)
    }}>
        {props.selected ? <b>STAR </b> : "STAR "}
    </span>
}