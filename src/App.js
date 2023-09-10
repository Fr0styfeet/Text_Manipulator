import './App.css';
import React, { useState } from 'react'; //hook
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode,setMode]=useState('light'); //dark mode?

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
    }
  }
  
  return (
    <>
    <Navbar title="Text Manipulator" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-4">
    <TextForm mode={mode}/>
    </div>
    </>
  );
}

export default App;
