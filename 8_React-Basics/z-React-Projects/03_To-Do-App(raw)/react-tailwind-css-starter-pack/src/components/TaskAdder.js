import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function TaskAdder(){

    const {add,tasks} = useContext(AppContext);


    const [formData,setFormData] = useState(
        {
            title : "",
            desc : "",
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

    console.log("typeoftasks",typeof tasks);
    function submitHandler(e){
        e.preventDefault();
        add(formData);
        console.log("typeoftasks",typeof tasks);
        setFormData({
            title : "",
            desc : "",
        })
    }

    // console.log(formData);
    console.log("tasks",tasks);


    return(
        <div>
            <form>
                <label htmlFor="title">Task Name</label>
                <input name="title" id="title" type="text" placeholder="title" value={formData.title} onChange={changeHandler}  />

                <label htmlFor="desc">Description</label>
                <input name="desc" id="desc" type="text" placeholder="desc" value={formData.desc} onChange={changeHandler} />

                <button type="submit" onClick={submitHandler}>
                    ADD
                </button>
            </form>

        </div>
    )


}

export default TaskAdder;