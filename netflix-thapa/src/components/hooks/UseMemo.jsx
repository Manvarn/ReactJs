import { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  // Memoized multiplication calculation
  const multiplication = useMemo(() => {
    console.log("Multiply function called");
    return add * 10;
  }, [add, minus]);

  return (
    <div className="App">
      <h1>Learning Memo</h1>
      <span>{multiplication}</span>
      <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      <span>{minus}</span>
    </div>
  );
};

export default UseMemoExample;
