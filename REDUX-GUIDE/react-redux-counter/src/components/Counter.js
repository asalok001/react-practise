// for dispatcing actions without action keys see older files

// ***** Using Store via configureStore access methods ******* 

import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  // const [isShowCounter, setIsShowCounter] = useState(true);  *** Using with new useSelector

  // Automatically sets up subscription to store by useSelector()
  const counter = useSelector(state => state.counter.counter);

  // Using multiple state with useSelector()
  const show = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();  // Dispatching action to store

  const incrementHandler = () => {
    dispatch(counterActions.increment()); //triggering action on the keys of reducer slice
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increseHandler = () => {
    dispatch(counterActions.increase(10));  //passing payloads/ values from actions via default key: PAYLOAD
  };

  const toggleCounterHandler = () => {
    // if (isShowCounter) {
    //   setIsShowCounter(false);
    // } else {
    //   setIsShowCounter(true);
    // }

    // Doing it with new ACTION

    dispatch(counterActions.toggle());
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

export default Counter;
