import React from "react";

export type RatingValueType = 0|1|2|3|4|5


 type RatingPropsType = {
    value: 0|1|2|3|4|5;
    setValue:(value:RatingValueType) => void
}

export function Rating (props:RatingPropsType) {
    return (
        <div>

            <Star selected={props.value > 0} callBack = { props.setValue} value = {1} />
            <Star selected={props.value > 1} callBack = { props.setValue} value = {2}/>
            <Star selected={props.value > 2} callBack = { props.setValue} value = {3}/>
            <Star selected={props.value > 3} callBack = { props.setValue} value = {4}/>
            <Star selected={props.value > 4} callBack = { props.setValue} value = {5}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    callBack: (value:RatingValueType) => void
    value:RatingValueType
}

function Star(props: StarPropsType) {
    return <span onClick={ () => props.callBack(props.value)}>
        {props.selected ? <b>STAR </b> : "STAR "}
    </span>
}