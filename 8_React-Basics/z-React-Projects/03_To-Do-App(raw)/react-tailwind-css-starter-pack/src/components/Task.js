import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TaskAdder from "./TaskAdder";
import RenameAdder from "./RenameAdder";

function Task({task,id}){


    const {remove,renameValue,setRenameValue,setRenameIndex,renameIndex} = useContext(AppContext);

    

    const idnum = Number(id);

    function removeHandler(e){
        console.log("target-id",e.target.id)
        remove(e.target.id);
        setRenameValue(false);
    }

    function renameHandler(e){
        console.log("rename clicked");
        setRenameValue(true);
        //rename(e.target.id);
        setRenameIndex(e.target.id);
    }
    console.log("renameValue",renameValue);

    return(
        <div >
            <p>{task.title}</p>
            <p>{task.desc}</p>
            <div>
               {
                renameValue ? <></> : ( <button id={idnum} onClick={renameHandler}>
                    rename
                    </button>)
               }
            </div>
            <div>
                <button id={idnum} onClick={removeHandler}>
                remove btn
                </button>
            </div>
            <div>

                

            </div>
        </div>
    )

}

export default Task;