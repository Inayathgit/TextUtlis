
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light')
  const[buttonmode,setbuttonmode] = useState('light')
  const [alert,setalert] = useState(null);
  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type})
      setTimeout(() => setalert(null), 2000);
    
  }
  const togglebuttonMode = (color) =>{
    document.body.style.backgroundColor = color
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.title = "TextUtils-Darkmode";
      document.body.style.backgroundColor = '#032152'
      showalert("Dark mode enabled","success")
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("light mode enabled","success")
      
      document.title = "TextUtils-Lightmode";
    }
  }

  return (
    <>
  <Router>
    <Navbar title = "Textutils1" aboutText = "About us" mode ={mode} toggleMode={toggleMode} />
    <Alert alert = {alert} />
    <Routes>
          <Route path="/about" element={<About mode = {mode}/>}>
            {/* <About /> */}
            
          </Route> 
         
          <Route path="/" element={<TextForm  heading ="Enter text to analyze"mode ={mode} showalert = {showalert}/>}>
          {/* <TextForm  heading ="Enter text to analyze"mode ={mode} showalert = {showalert}/> */}
          </Route> 
        </Routes>
         </Router>
    
    </>
  );
}

export default App;
