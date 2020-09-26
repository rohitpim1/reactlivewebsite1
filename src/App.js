import React, { useState } from 'react';
import './App.css';
import Pro from "./Pro";


const App = () => {
  const bg = "#00ff80";
  let d = new Date().toLocaleTimeString();
  const[currDate , setCurr] = useState(d);
  const[bac , setBac] = useState(bg);
  const[name , changeName] = useState("click me");
  
  const start = () =>{
    let dv = new Date().toLocaleTimeString();
    setCurr(dv);
  }
  setInterval(start,1000);
  const backcolor = () =>
  {  
    const b = "#ff4000";
    setBac(b);
    const t = "hurray!";
    changeName(t);
   
  }
  const dclick = () =>
  {
    const g = "	#00ffff";
    setBac(g);
  
    changeName("oye !");
  }
  return(
    <>
    <Pro time = {currDate}/>
   <div style= {{ background : bac }}>
   <button onClick = {backcolor} onDoubleClick = {dclick}> {name}</button>
   </div>
  
  </>

  );

};

export default App;
