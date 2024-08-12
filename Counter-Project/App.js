import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);

  //const counter = 5;

  const addValue = () => {
    //console.log("value added", counter);
    //counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    //console.log("removed value");
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
