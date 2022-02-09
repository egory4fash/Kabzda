import AccordionReducer, {StateType, TOGGLE_CONSTANT} from "./AccordionReducer";

test('reducer should change state to opposite',() => {

const state:StateType = {
    collapsed:false
}
const newState = AccordionReducer(state,{type:TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(!state.collapsed)
})

