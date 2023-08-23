import "./App.css";
import React, {useState} from 'react';

function App() {

  //let count = 0 ;
  const [count,setCount] = useState(0);

  function decreaseHandler(){
    console.log("dec");
    //count = count - 1 ;
    setCount(count-1);
  }

  function increaseHandler(){
    console.log("inc");
    //count = count -+ 1 ;
    setCount(count+1);
  }

  function resetHandler(){
    console.log("Restet");
    setCount(0);
  }




  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">

        <div className="text-[#dcff2d] font-medium font-mono text-2xl">Increment and decrement</div>

        <div className="flex bg-white p-[15px] gap-10 rounded-sm justify-center text-[red]">
          <button className="text-5xl border-[green] border-r-2 pr-5" onClick={decreaseHandler}>-</button>
          <div className="text-5xl">{count}</div>
          <button className="text-5xl border-l-2 border-[green] pl-5" onClick={increaseHandler}>+</button>
        </div>

        <button className=" text-center w-20 text-3xl bg-blue-700" onClick={resetHandler}>Reset</button>

    </div>
  );
}

export default App;
