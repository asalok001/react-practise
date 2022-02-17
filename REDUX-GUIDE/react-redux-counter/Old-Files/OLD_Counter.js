import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
    // const [isShowCounter, setIsShowCounter] = useState(true);  *** Using with new useSelector

    // Automatically sets up subscription to store by useSelector()
    const counter = useSelector(state => state.counter);

    // Using multiple state with useSelector()
    const show = useSelector(state => state.showCounter);

    const dispatch = useDispatch();  // Dispatching action to store

    const incrementHandler = () => {
        dispatch({ type: 'increment' }); //triggering action to store 
    };
    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    };
    const increseHandler = () => {
        dispatch({ type: 'increase', amount: 5 });
    };

    const toggleCounterHandler = () => {
        // if (isShowCounter) {
        //   setIsShowCounter(false);
        // } else {
        //   setIsShowCounter(true);
        // }

        // Doing it with new ACTION

        dispatch({ type: 'toggle' });
    };


    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {/* {isShowCounter && <div className={classes.value}>{counter}</div>} */}
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increseHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

// export default Counter;
