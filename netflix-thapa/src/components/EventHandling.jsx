import React from 'react'

export const EventHandling = () => {

function handleButtonClick  (event) {
    console.log(event);
    
    alert("het i am onClick event");
}
const handleButtonUser = (User) => {
    console.log(`hey ${User}, click me`);
};


  return (
    <>
    <button onClick={handleButtonClick}>click me</button>
    <br />
    <button onClick={(event)=>handleButtonClick(event)}>click me 2</button>
    <br />
    <button onClick={(event)=> console.log(event)}>Inline Function</button>
    <br />
    <button onClick={()=> alert("het i am onClick event")}>Inline arr function</button>
    <button onClick={()=> handleButtonUser("het")}>click now</button>
    </>
  )
}
