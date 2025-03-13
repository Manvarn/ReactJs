import { useState, useEffect } from "react";
import "./index.css";

const ReactUseEffect = () => {
  //   const [count, setCount] = useState(0);
  const [date, setDate] = useState(0);

  //   useEffect(() => {
  //     console.log("count value : ", count);
  //   }, [count]);

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    // <div>
    //   <h1>Hello , useEffect!</h1>
    // </div>

    // <div className="container effect-container">
    //   <h1>useEffect Hook</h1>
    //   <p>Count:{count}</p>
    //   <button onClick={() => setCount(count + 1)}>Increment</button>
    // </div>

    <div className="container effect-container">
      <h1>Date : {date}</h1>
    </div>
  );
};

export default ReactUseEffect;

// useEffect ki under two argument he one is Callback function and another is array dependencies.
