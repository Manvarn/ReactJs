// import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import Chai from "./chai.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   );
// }
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "blank",
//   },
//   Children: "Click me to visit goggle",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );
const anotherUSer = "chai aur react";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blankc" },
  "click me to visit google",
  anotherUSer
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  //   <Chai />
  /* <MyApp /> */
  // </StrictMode>
  // anotherElement
  reactElement
);
