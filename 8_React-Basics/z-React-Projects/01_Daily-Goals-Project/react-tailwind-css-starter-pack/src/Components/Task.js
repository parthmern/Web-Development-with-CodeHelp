import React from "react";

const Task =({title,description,deleteTask,index})=>{
    console.log("task created");


    return (
        <div className="flex items-center justify-around mx-auto mb-3 border-[1px] p-2 border-orange-500 w-[90%] ">
            <div>
                <p className="border-[1px] border-r-lime-500" >{title}</p>
                <p className="border-[1px] border-r-lime-500">{description}</p>
            </div>
            
            <button onClick={()=>deleteTask(index)} className="bg-[red] flex items-center h-5 w-5 rounded-full justify-center p-3">-</button>
        </div>
    );
}

export default Task;