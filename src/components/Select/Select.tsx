import React, {useState, KeyboardEvent, useEffect} from "react";
import {ItemType} from "../Accordion/Accordion";
import styles from "./Select.module.css"

type SelectPropsType = {
    value: any

    items: ItemType[]
    onChangeValue: (value: any) => void
}

export const Select = (props: SelectPropsType) => {

    let [active, setActive] = useState(false)
    let [hoveredElemValue, sethoveredElemValue] = useState(props.value)
    useEffect(() => {
            sethoveredElemValue(props.value)
        },
        [props.value]
    )

    const onTitleClickHandler = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChangeValue(value)
        setActive(false)
    }

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElemValue)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElemValue) {
                    if (props.items[i + 1].value) {
                        props.onChangeValue(props.items[i + 1].value)
                        break
                    }
                }
            }
        } else if (e.key === "ArrowUp")
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElemValue) {
                if (props.items[i - 1].value) {
                    props.onChangeValue(props.items[i - 1].value)
                    break
                }
            }
        }
    }


    return (
        <div>

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={onTitleClickHandler}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i => {
                            console.log(i, 'I')
                            return <div
                                className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                key={i.value}
                                onMouseEnter={() => {
                                    sethoveredElemValue(i.value)
                                }}
                                onClick={() => onItemClick(i.value)}>
                                {i.title}
                            </div>
                        })
                        }
                    </div>}
            </div>
        </div>
    )
}