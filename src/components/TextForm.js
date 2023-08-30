import React, { useState } from "react"; //hook

export default function TextForm() {
    const handleOnchange=(event)=>{
        console.log("changed");
        setText(event.target.value)
    }
    const handleClear=()=>{
        setText("")
    }
    const handleUp=()=>{
        let newText=text.toUpperCase(text);
        console.log(newText);
        setText(newText);
    }
    const handleLow=()=>{
        let newText=text.toLowerCase(text);
        setText(newText);
    }
    const handleTit=()=>{
        let newText=text.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        
        setText(newText);
    }
    const handleSen=()=>{
        let newText=text.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
        
        setText(newText);
    }
    const [text, setText] = useState(""); //destructuring
  return (
    <>
    <div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="form1"
          onChange={handleOnchange}
          value={text}
          rows="3"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleUp}>
        Uppercase
      </button>
      <button type="button" className="btn btn-success mx-2" onClick={handleLow}>
        Lowercase
      </button>
      <button type="button" className="btn btn-warning mx-2" onClick={handleSen}>
        Sentencecase
      </button>
      <button type="button" className="btn btn-secondary mx-2" onClick={handleTit}>
        Titlecase
      </button>
      <button type="button" className="btn btn-danger mx-2 my-2" onClick={handleClear}>
        Clear
      </button>
    </div>
    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>
    </>
  );
}
