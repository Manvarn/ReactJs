import { useState } from "react";

const State = () => {
  //   let value = 0;
  //   const handleButtonClick = () => {
  //     value++;
  //     console.log(value);
  //   };

  // let array = useState();
  // console.log(array);
  const [count, setCount] = useState(0);
  console.log("Parent Component Rendered");

  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <>
      <section className="main-div">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        {/* <button>Increment</button> */}
      </section>
      <ChildComponent count={count} />
      {/* <Sibling count={count} /> */}
    </>
  );
};

function ChildComponent({ count }) {
  console.log("Child Component Rendered");
  return (
    <div className="main-div">
      <h2>Child Component - {count}</h2>
    </div>
  );
}

// function Sibling({ count }) {
//   console.log("Sibiling Component rendered");
//   return (
//     <div className="main-div">
//       <h2>Sibling Component - {count}</h2>
//     </div>
//   );
// }

export default State;

// State change thay count vadharva ke ghatadva mate ee rite operation karva mate.

// - It's because those are normal variables and React.js doesn't know that it's going to be changed.
// - And that react should respond or update DOM based on that.
// - Those values are already rendered on DOM , there is no way they will be re-rendered.
// - For that React.js provides a function called "useState".
// - This type of function which starts with "use" is called hook.
// This is a special function which has some features provided by react.js
// - we will learn about hooks in future

// --------------x------------------
// function App() {
//   return (
//     <div>
//       <ParentComponent>
//         <ChildComponent />
//         <AnotherChildComponent />
//       </ParentComponent>
//       <SbilingComponent />
//     </div>
//   );
// }
// Initial Render :- When the App component first renders , React renders ParentComponent , ChildComponent , AnotherChildComponent , and SiblingComponent

// State Change in ParentComponent :- Suppose there is a state change in ParentComponent. React will re-render ParentComponent and all its children(ChildComponent and AnotherChildComponent).

// Component Outside :- SiblingComponent is affected by the state change in ParentComponent. Therefore , it will not be re-rendered.
