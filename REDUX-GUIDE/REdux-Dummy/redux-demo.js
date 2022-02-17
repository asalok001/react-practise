const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {

        return {
            counter: state.counter + 1
        };
    };
    if (action.type === 'decrement') {

        return {
            counter: state.counter - 1
        };
    };
    return state;

};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    // Reaching to store. Give latest state snapshot after updated
    const latestUpdaate = store.getState();

    console.log(latestUpdaate);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });