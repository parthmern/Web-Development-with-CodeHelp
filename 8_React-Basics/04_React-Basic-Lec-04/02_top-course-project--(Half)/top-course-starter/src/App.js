import React, { useEffect, useState } from "react";
import { apiUrl, filterData as fData } from "./data";

import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";

const App = () => {

  //console.log(fData);

  const[courses,setCourses] = useState(null);

  useEffect( ()=>{
    const fetchData = async() =>{
      try{
        const response = await fetch(apiUrl);
        const result = response.json();
        //save data
        console.log(result);
        setCourses(result.data);
        console.log("courses valuees----",result.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
    }
    fetchData();

  },[] );

  return (
    <div >

      <Navbar/>

      <Filter
      filterDataData={fData}
      />

      <Cards
      courses={courses}
      />

    </div>
  );

};

export default App;
