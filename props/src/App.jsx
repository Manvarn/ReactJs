import "./App.css";
import Student from "./props";
import { Books } from "./props";
import { Car } from "./props";
function App() {
  return (
    <>
      <Student name="nikhil" age={22} bio="react js developer" />
      <Student name="dhruv" age={23} bio="node jsdeveloper" />
      <Student name="renish" age={24} bio="python developer" />

      <sBook bookname="Nothing Like The Movies" author="Lynn Painter" />

      <Car />
    </>
  );
}

export default App;
