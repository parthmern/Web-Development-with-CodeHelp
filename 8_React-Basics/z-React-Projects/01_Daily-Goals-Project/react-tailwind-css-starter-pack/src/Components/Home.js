import React, { useState,useEffect } from "react";
import Task from "./Task";

const Home = () =>{

    const [tasks,setTasks] = useState([]);

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log("previous tasksss=",...tasks);
        
        setTasks([...tasks,{title:title, description:description}]);
        console.log("originalTask=",tasks);
    }
    
    const deleteTask = (index) =>{
        const filteredArr = tasks.filter((val,i)=>{
            return i !== index ;
        })
        console.log(filteredArr);
        setTasks(filteredArr);
    }

    return(
        <div className="mx-auto pb-9 w-9/12 pt-9 bg-[#279EFF]  ">

            <form className="w-[80%] items-center justify-center mx-auto gap-[10px] pt-5 pb-5 mb-4 bg-[#793FDF] flex flex-col" >
                <input type="text" placeholder="title" className="" value={title} onChange={(e)=>setTitle(e.target.value)}  />
                <textarea placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)} />

                <button  type="submit" onClick={submitHandler} >SUBMIT </button>
            </form>

            <div>
                {
                    tasks.map((item,index)=>{
                        return(
                            <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
                        );
                    })
                }
            </div>

            

        </div>
    );

}

export default Home;