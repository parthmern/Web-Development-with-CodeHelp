import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return(
    <div 
    className="relative w-full h-fit pb-8 flex flex-col background items-center"
    >

      {/* heading */}
      <h1
      className=" text-black w-11/12 overflow-hidden text-4xl text-center mt-[40px] mx-auto items-center font-bold bg-white rounded-lg py-2 px-10"
      >RANDOM GIFS</h1>

      {/* random and searchTag generator */}
      <div>

        <Random />
        <Tag />

      </div>
    </div>
  )
}

export default App;
