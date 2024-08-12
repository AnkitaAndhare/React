import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // counter is variable setcounter is fun to update the counter variable
  const [counter, setCounter] = useState(15);

  //let counter = 15;  this varible updation  will not reflect in ui

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }

    //  console.log("clicked ", counter);
    //counter = counter + 1;
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Value will be within 0 to 20 only </h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;

/*
react helps in ui updation 

*/
