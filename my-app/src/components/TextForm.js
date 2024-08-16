import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleOnChange = (e) =>{
        // console.log("On change ");
        setText(e.target.value)
        
    }
  const [text, setText] = useState("Enter text here");
  //text = "new text" // wrong way to change state
  //setText("new text"); // correct way
  return (
    <>

    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        {/* <label for="myBox" class="form-label">Enter your Text below</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary"  onClick={handleUpClick}>Convert to Uppercase </button>
    </div>

    </>
    

  );
}
