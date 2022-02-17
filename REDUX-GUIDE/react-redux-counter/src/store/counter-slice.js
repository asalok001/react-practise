import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

// ******* Creating Slices ************
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;  // see notes
        },
        decrement(state) {
            state.counter--; // see notes
        },
        increase(state, action) {
            state.counter = state.counter + action.payload; // data dispatching from actions via payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});
// Exporting out actions to subscriber 
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;