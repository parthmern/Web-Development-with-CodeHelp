import {useEffect, useState } from "react";
import "./App.css";

function App() {

  const [text,setText] = useState('') ;

  // VARIATION-1 (every render)
  // useEffect( () => {
  //   console.log("UI render Done");} 
  // );

  // VARIATION-2 (first render - when app.js fully renderd for first time)
  // useEffect( ()=>{
  //   console.log("UI rendereddone");
  // },[] );

  //VARIATION-3 (first rende + whenever dependency changes)
  // useEffect(()=>{
  //   console.log(" text changed observed");
  // },[text])

  //VARIATION-4(to handle unmounting of components)
  useEffect(()=>{
    //add event listener
    console.log("listener added");

    return ()=>{
      console.log("listener removed");
    }
  }) //first run "listener removed" then run "listener added"

  function changeHandler(event){
    setText(event.target.value)
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
