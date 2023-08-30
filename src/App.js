import './App.css';
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    <Navbar title="Text Manipulator"/>
    <div className="container my-4">
    <h1>Enter your text here</h1>

    <TextForm/>
    </div>
    </>
  );
}

export default App;
