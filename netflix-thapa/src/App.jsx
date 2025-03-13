// import seriesData from "./api/netfilx.json";
// import EventPropagation from "./components/EventPropagation";
// import EventProps from "./components/EventProps";
// import { NetflixCard } from "./components/netflixCard";

// function App() {
//   return (
//     <ul>
//       {/* {seriesData.map((currElem) => {
//         return <NetflixCard key={currElem.id} currElem={currElem} />;
//       })} */}
//       <br />
//       <br />
//       {/* <EventProps /> */}
//       {/* <EventPropagation /> */}
//     </ul>
//   );
// }

// export default App;

// import State from "./components/hooks/State";
// import DerivedState from "./components/DerivedState";
// import LiftingState from "./components/LiftStateUp";
// import ReactUseEffect from "./components/hooks/UseEffect";
// import Challenge from "./components/hooks/UseEffect/EffectChallenge";
// import CleanUp from "./components/hooks/UseEffect/CleanUp";
// import HowNotToFetchApi from "./components/hooks/UseEffect/HowNotToFetchApi";
// import UseMemoExample from "./components/hooks/Memo/UseMemo.jsx";
// import UseCallbackExample from "./components/hooks/UseCallback";
// import UseReducer from "./components/hooks/UseReducer";
import ReducerComp from "./components/hooks/UseReducer";

const App = () => {
  return (
    <section className="container">
      {/* <State /> */}
      {/* <Sibling /> */}
      {/* <DerivedState /> */}
      {/* <LiftingState /> */}
      {/* <ReactUseEffect /> */}
      {/* <Challenge /> */}
      {/* <CleanUp /> */}
      {/* <HowNotToFetchApi /> */}
      {/* <UseCallbackExample /> */}
      {/* <UseMemoExample /> */}
      {/* <UseReducer /> */}
      <ReducerComp />
    </section>
  );
};

// export function Sibling() {
//   console.log("Sibiling Component rendered");
//   return (
//     <div className="main-div">
//       <h2>Sibling Component</h2>
//     </div>
//   );
// }

export default App;
