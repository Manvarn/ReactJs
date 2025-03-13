// import React, { useState, useCallback } from "react";

// const UseCallbackExample = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   const handleChange = useCallback((event) => {
//     setText(event.target.value);
//   }, []);

//   return (
//     <div>
//       <h1>useCallback Hook Example</h1>
//       <button onClick={increment}>Increment Count</button>
//       <p>Count: {count}</p>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Text: {text}</p>
//     </div>
//   );
// };

// export default UseCallbackExample;

import { useState, useCallback } from "react";
import ChildA from "./ChildA";

const UseCallbackExample = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const Learning = useCallback(() => {
    // some operation
  }, [count]);

  return (
    <div className="app">
      <h1>Learning useCallback</h1>
      <ChildA Learning={Learning} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Count</button>
    </div>
  );
};

export default UseCallbackExample;
