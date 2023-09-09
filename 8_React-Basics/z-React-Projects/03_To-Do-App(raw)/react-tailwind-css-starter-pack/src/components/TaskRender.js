import React, { useContext } from "react";
import Task from "./Task";


function TaskRender({tasks}){

    console.log("taskrender tasks",tasks);

    return(
        <div>
            {
                tasks.map(
                    (task,index)=>{
                        return(
                            <div key={index}>
                                <Task id={index} task={task} />
                            </div>
                        )
                    }
                )
            }
        </div>
    )

}

export default TaskRender;