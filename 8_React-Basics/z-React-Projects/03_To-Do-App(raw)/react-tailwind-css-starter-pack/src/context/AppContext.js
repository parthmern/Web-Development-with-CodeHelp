import { createContext, useState } from "react";


export const AppContext = createContext();

function AppContextProvider({children}){

    const [renameValue,setRenameValue] = useState(false);
    const [renameIndex,setRenameIndex] = useState();

    const [tasks,setTasks] = useState([]);

    // task add function
    function add(newTask){
        console.log("newTask",newTask);
        setTasks(
            (oldArray)=>{
                return(
                    [...oldArray,newTask]
                    // oldArray.push(newTask)
                )
            }
        )
    }

    //task remove function / task delete
    function remove(id){

        const Removalid = Number(id);

        setTasks(
            
            (oldTasks)=>{
                return(
                    oldTasks.filter((task,index)=>{
                        console.log("index",index);
                        return(
                            Removalid !== index
                        )
                    })
                )
            }

        )

    }

    // task rename function
    function rename(index,formData){

        console.log("rename fun called")

        const indexnum = Number(index);
        console.log("indexnUMM",indexnum);
        console.log("formtitle=",formData.title);

        // const reTasks = tasks.forEach((task,index)=>{

        //     console.log(task);
        //     console.log(index);

        //     if(index == indexnum){
        //         console.log("matched");
        //         console.log("task title---dexx",task.title,task.desc);
        //         console.log("formDataaa title==dex",formData.title,formData.desc);
                
        //         return 
        //     }
        // })

        // console.log("reTasks=================",reTasks)

        setTasks( (prevTasks)=>{
            
            return prevTasks.map((task,index)=>{
                if(index === indexnum ){
                    return(
                        {
                            title : formData.title,
                            desc : formData.desc
                        }
                    )
                }
                else{
                    return task;
                }
            })

        });

    }

    const value ={
        tasks,
        setTasks,
        add,
        remove,
        rename,
        renameValue,
        setRenameValue,
        renameIndex,
        setRenameIndex
    }

    return <AppContext.Provider value={value}>     
        {children}                               
    </AppContext.Provider>;

}

export default AppContextProvider