// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  // const addValue = () => {
  //   //counter = counter + 1
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1 )
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)

  // }

  // const removeValue = () => {
  //   setCounter(counter - 1)
  // }

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    // setCounter(counter + 1);
    console.log(" Add Clicked", counter);
  };

  const removeValue = () => {
    // counter = counter - 1;
    // setCounter(counter);
    // // setCounter(counter + 1);
    // console.log("Remove Clicked", counter);
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("Remove Clicked", counter - 1);
    } else {
      console.log("Counter is already at 0, cannot go negative");
    }
  };

  return (
    <>
      <h1>Hello World !</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
