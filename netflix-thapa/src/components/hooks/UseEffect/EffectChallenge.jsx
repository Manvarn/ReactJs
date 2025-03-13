import { useState, useEffect } from "react";
import "./index.css";

const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `count:${count}`;
    console.log(count);
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count : <span>{count}</span>
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>
        Name: <span>{name}</span>
      </p>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
};

export default Challenge;

// Description: In this challenge, you'll create a React component that dynamically manages state using "useState" and "useEffect" hooks. Your component will include:

// 1. A counter that increments whe na button is clicked.
// 2. An input field where users can type their name.
// 3. The document title will update to show the current count.
