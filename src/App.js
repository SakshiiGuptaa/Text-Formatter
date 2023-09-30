import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light'); //whether dark mode is enable or not
  const[alert,setAlert] = useState(null); 
  // const[button,setButton] = useState("primary");
  // const showButton = (type) =>{
  //   setButton({
  //     type : type     
  //   })
  // }
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type     
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
        // setInterval(() => {
        //   document.title = 'TextUtils is amazing';
          
        // }, 2000);
        // setInterval(() => {
        //   document.title = 'Install TextUtils now';
          
        // }, 1500);

  
    
    const toggleMode = () =>{
      
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","primary");
      // showButton("primary");
      // document.title = 'TextUtils - Blue mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","primary");
      // showButton("primary");
      // document.title = 'TextUtils - Light mode'
      }  
    }
    return (
      <>
      <BrowserRouter>

      <Navbar title = "TextUtils" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={
        <TextForm showAlert={showAlert} heading="Try Textutils - word counter, character counter, remove extra spaces" mode={mode} />
        } />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
//fuction mode & class mode
export default App;
