export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creator for incrementing the count
export const increment = () => {
    console.log("counterActions - returning INCREMENT");
    return {
        type: INCREMENT,
    };
};

// Action creator for decrementing the count
export const decrement = () => {
    console.log("counterActions - returning DECREMENT");
    return {
        type: DECREMENT,
    };
};