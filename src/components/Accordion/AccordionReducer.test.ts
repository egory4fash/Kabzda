import AccordionReducer, {StateType, TOGGLE_CONSTANT} from "./AccordionReducer";

test('reducer should change state to opposite',() => {

const state:StateType = {
    collapsed:false
}
const newState = AccordionReducer(state,{type:TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(!state.collapsed)
})


test('error raised by incorrect action', () => {

    const state:StateType = {
        collapsed:false
    }

    expect( () => {
        AccordionReducer(state,{type:"TOGGLE_CONSTANTE"})
    }).toThrowError()

})



