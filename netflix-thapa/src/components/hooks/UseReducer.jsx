// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "Increment":
//       return state + 1;
//     case "Decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// function UseReducer() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <div>Count : {count}</div>
//       <button onClick={() => dispatch("Increment")}>Increment</button>
//       <button onClick={() => dispatch("Decrement")}>Decrement</button>
//     </div>
//   );
// }

// export default UseReducer;

// (state, action)  - as  parameter passed / state - current state / action - action to be performed
// useReducer(reducer, initialState) - reducer function and initial state passed as parameter

import { useReducer, useState } from "react";

const initialState = { count: 0 };

const ReducerComp = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   return state - 1;
    // }
    // if (action.type === "RESET") {
    //   return 0;
    // }

    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count + 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  };

  //   const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="p-4 h-lvh flex flex-col items-center justify-center">
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};

export default ReducerComp;

// const [count, setCount] = useReducer(reducer, initialState);
// count - The current state value. (State Variable)
// dispatch - TO send actions to the reducer function. (Action Variable)
// Reducer - A function that takes the current state and an action as arguments, and returns a new state result. (Reducer Function)
// initialState - The initial state value. (Initial State)
