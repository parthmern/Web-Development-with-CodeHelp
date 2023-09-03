import React from "react";
import { useEffect, useState } from "react";

function useFetch(){
  
    const [arr,setArr] = useState([]);

    async function fetchData(){
  
      try{
        const req = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
        const res = await req.json();
        console.log(res);
        setArr(res);
        
      }
      catch(e){
  
      }
  
    }
  
    useEffect(()=>{
      fetchData();
    },[])

    return {arr} ;
}

export default useFetch;

