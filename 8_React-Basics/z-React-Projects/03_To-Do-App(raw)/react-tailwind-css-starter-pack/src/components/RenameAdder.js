import React, { useEffect } from "react";
import TaskAdder from "./TaskAdder";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function RenameAdder(props){

    console.log("rename idex",props.id);

    const {renameValue,rename,setRenameValue,tasks,renameIndex} = useContext(AppContext);

    console.log("renmaeIndex title",tasks[renameIndex].title)

    const [renameIndexTitle,setRenameIndexTitle] = useState(tasks[renameIndex].title);
    const [renameIndexDesc,setRenameIndexdesc] = useState(tasks[renameIndex].desc);

    useEffect(()=>{
        setRenameIndexTitle(tasks[renameIndex].title);
        setRenameIndexdesc(tasks[renameIndex].desc);
        
    },[renameIndex])
    

    const [formData,setFormData] = useState(
        {
            title : tasks[renameIndex].title,
            desc : renameIndexDesc,
        }
    )


    function changeHandler(event){
        setFormData(
            (oldForm)=>{
                return{
                    ...oldForm,
                    [event.target.name] : event.target.value 
                }
                    
            }
        )
    }
    console.log("rename form data",formData);


    function renameHandler(e){
        e.preventDefault();
        //add(formData);
        rename(renameIndex,formData);

        setRenameValue(false)
        
        console.log("typeoftasks",typeof tasks);
        setFormData({
            title : "",
            desc : "",
        })
    }



    return(
        <form>
            <label htmlFor="title">Task Name</label>
                <input name="title" id="title" type="text" placeholder="title" value={formData.title} onChange={changeHandler}  />

                <label htmlFor="desc">Description</label>
                <input name="desc" id="desc" type="text" placeholder="desc" value={formData.desc} onChange={changeHandler} />

                <button type="submit" onClick={renameHandler}>
                   Click Rename 
                </button>
        </form>
    )

}

export default RenameAdder;