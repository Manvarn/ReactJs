import React from "react";

const EventHandling = () => {
  // function handleButtonClick() {
  //   alert("Hey I am onClick Event");
  // }
  const handleButtonClick = (event) => {
    console.log(event); //SyntheticBaseEvent
    console.log(event.target); //<button>Click Me</button>
    console.log(event.type); //click

    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
    // console.log(`Hey User , Welcome!`);
    console.log(`Hey ${user} , Welcome!`);
  };
  return (
    <div>
      {/* ? Function Component with Named function */}
      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      <br />

      {/* Using Fat Arrow function (aema function call karavo pade) */}
      {/* Pointer Event */}
      {/* <button onClick={() => handleButtonClick(event)}>Click Me 2</button> */}
      {/* SyntheticBaseEvent */}
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      {/* jyre ape named function use kariye tyre function call karvano nathi becoz function will call before click event  and  fat arrow function use kariye tyre function should be call and then click event occur */}
      {/* ? Inline Event Handlers */}
      <br />
      <br />
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />
      <br />

      {/* Function Component with  Inline Arrow Function */}
      <button onClick={() => alert("Hey I am Inline Arrow Function")}>
        Inline Arr Function
      </button>
      <br />
      <br />

      {/* Passing Arguments to Event Handlers */}
      <button onClick={() => handleWelcomeUser("nikhil")}>Click ME</button>
    </div>
  );
};

export default EventHandling;
