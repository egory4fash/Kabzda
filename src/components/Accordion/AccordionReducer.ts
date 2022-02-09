import {ActionType} from "./UncontrolledAccordion";

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed:boolean
}

const AccordionReducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state,collapsed:!state.collapsed};
        default:
            throw new Error("Bad action type")
    }
    return state
}

export default AccordionReducer