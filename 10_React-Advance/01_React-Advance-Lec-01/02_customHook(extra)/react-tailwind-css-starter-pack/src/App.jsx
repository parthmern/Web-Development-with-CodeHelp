import { useEffect, useState } from "react";
import "./App.css";

import useFetch from "./components/useFetch";

function App() {

  const {arr} = useFetch();

  return (
    <div>
      <div>hello</div>

      <div>
          { arr &&
            arr.map((item)=>{
              return (<div key={item.id}>{item.firstName}</div> )
            })
          }
      </div>

    </div>
  );
}

export default App;
