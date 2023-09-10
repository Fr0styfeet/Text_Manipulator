import React, { useState } from "react"; //hook

export default function TextForm(props) {
    const handleOnchange=(event)=>{

        setText(event.target.value)
    }
    const handleClear=()=>{
        setText("")
    }
    const handleUp=()=>{
        let newText=text.toUpperCase(text);

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
        const sentences = text.split('. ');
        const sentenceCaseSentences = sentences.map((sentence) => {
        if (sentence.trim() === '') {
          return sentence;
        }
    
        const firstLetter = sentence.charAt(0).toUpperCase();
        const restOfSentence = sentence.slice(1).toLowerCase();
        return firstLetter + restOfSentence;
      });
        const sentenceCaseParagraph = sentenceCaseSentences.join('. ');
    
        setText(sentenceCaseParagraph);
    }

    const handleCopy=()=>{
      let text =document.getElementById("form1");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }



    const [text, setText] = useState(""); //destructuring

    // const [btnTxt,setBtnTxt]=useState(
    //   'Enable Dark Mode'
    // );

    // const [mystyle,setmyStyle]=useState( {
    //     color: 'black',
    //     backgroundColor :'white'
    // });

    // const toggleStyle=()=>{
    //     if(mystyle.color==='black'){
    //       setmyStyle({
    //         color: 'white',
    //         backgroundColor :'black'
    //       })
    //       setBtnTxt('Enable White Mode');
    //     }
    //     else{
    //       setmyStyle({
    //         color: 'black',
    //         backgroundColor :'white'
    //       })
    //       setBtnTxt('Enable Dark Mode');
    //     }

    // };


  return (
    <>
    <div className="cont" style={{backgroundColor: props.mode==='light'?'white':'#343a40' ,color: props.mode==='light'?'black':'white'}} >
    <h1 className="mx-2" >Enter your text here</h1>
    <div className="container "  >
      <div className="mb-3">
        <textarea
          className="form-control"
          id="form1"
          onChange={handleOnchange}
          value={text}
          rows="3" style={{backgroundColor: props.mode==='light'?'white':'#343a40' ,color: props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleUp}>
        Uppercase
      </button>
      <button type="button" className="btn btn-success mx-2" onClick={handleLow}>
        Lowercase
      </button>
      <button type="button" className="btn btn-warning mx-2"  onClick={handleSen}>
        Sentencecase
      </button>
      <button type="button" className="btn btn-secondary mx-2" onClick={handleTit}>
        Titlecase
      </button>
      <button type="button" className="btn btn-info mx-2" onClick={handleCopy}>
        Copy text
      </button>
      <button type="button" className="btn mx-2" style={{ backgroundColor: 'pink' }} onClick={handleSpace}>Remove Extra Spaces</button>
      <button type="button" className="btn btn-danger mx-2 my-2" onClick={handleClear}>
        Clear
      </button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>
    </div>
    </>
  );
}
