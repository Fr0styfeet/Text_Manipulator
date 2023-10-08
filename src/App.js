import './App.css';
import React, { useState } from 'react'; //hook
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
// import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState('light'); //dark mode?
  // const [alert,setAlert]=useState(null);

  // const handleAlert=(message,type)=>{
  //     setAlert({
  //       msg:message,
  //       type:type
  //     })
  // }

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
    {/* <Alert alert="this is alert"/> */}
    <div className="container my-4">
    <TextForm mode={mode}/>
    </div>
    </>
  );
}

export default App;
