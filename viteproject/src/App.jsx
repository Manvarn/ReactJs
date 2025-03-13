import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";

function App() {
  const [count, setCount] = useState(98);

  return <Parent count={count} />;
}

export default App;
