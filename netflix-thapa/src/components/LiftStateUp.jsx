import { useState } from "react";

const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The current input value is :{inputValue}</p>;
};

export default LiftingState;

// Lifting State UP is a pattern in React where you move the state from child components to a common parent component so that multiple child components can share and synchronize this state.
// FOr updating state of children from parent , you can sue concept called Lifting the state up.

// Parent Component : Holds the state inputValue and the state handler setInputValue.
// Input Component : Receives inputValue and setInputValue as props. IT updates the state via setInputValue when the input changes.
// Display Component : Receives inputValue as a prop and displays the cureent input value.
