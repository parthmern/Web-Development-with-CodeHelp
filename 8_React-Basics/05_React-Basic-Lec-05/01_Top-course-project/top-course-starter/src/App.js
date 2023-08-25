import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar" ;
import Filter from "./Components/Filter" ;
import Cards from "./Components/Cards" ;
import { apiUrl,filterData } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from "./Components/Spinner";
import Card from "./Components/Card";

const App = () => {

  const [courses,setCourses] = useState([]);

  const [loading,setLoading] = useState(true);

  const [category,setCategory] = useState("All");

  async function fetchData(){
    // spinner visible
    setLoading(true);

    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      console.log(output);
      
    }
    catch(error){
      toast.error("Network Erooooor");
    }

    // spinner removed
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return ( 
    <div className="min-h-screen flex flex-col bg-zinc-600" >
      
      <div>
        <Navbar/>
      </div>

      <div>
        <Filter category={category} setCategory={setCategory} filterData={filterData} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>

    </div>
  );
};

export default App;
