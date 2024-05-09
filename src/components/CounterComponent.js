import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions/counterActions'; // Assuming action creators are defined

const CounterComponent = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const handleIncrement = () => {
        console.log("CounterComponent - dispatching INCREMENT type");
        dispatch({ type: 'INCREMENT' });
        console.log("CounterComponent - dispatching increment() action");
        dispatch(increment()); // Dispatch 'INCREMENT' action
    };

    const handleDecrement = () => {
        console.log("CounterComponent - dispatching DECREMENT type");
        dispatch({ type: 'DECREMENT' });
        console.log("CounterComponent - dispatching decrement()");
        dispatch(decrement()); // Dispatch 'DECREMENT' action
    };
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};
export default CounterComponent;