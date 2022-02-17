//  *********** CREATING STORE **************

// import redux from 'react-redux';
import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    };
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }
    return state;
};

const store = createStore(counterReducer);

const storeSubscriber = () => {
    const latestUpdate = store.getState();;
    console.log(latestUpdate);
};
store.subscribe(storeSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

// export default store;