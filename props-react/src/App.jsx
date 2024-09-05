// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />


import Student from "./Student";

function App() {
  return(
    <>
      <Student name="Nikhil" age={22} isStudent={true}/>
      <Student name="Krunal" age={23} isStudent={false}/>
      <Student name="Chatur" age={24} isStudent={true}/>
      <Student name="Nirav" age={25} isStudent={false}/>
      <Student name="Vandana" age={26} isStudent={true}/>
      <Student />
    </>
  );
}

export default App
