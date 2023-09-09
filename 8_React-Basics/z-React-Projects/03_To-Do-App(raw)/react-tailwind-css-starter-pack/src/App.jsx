import { useContext } from "react";
import "./App.css";
import TaskAdder from "./components/TaskAdder";
import TaskRender from "./components/TaskRender";
import { AppContext } from "./context/AppContext";
import RenameAdder from "./components/RenameAdder";

function App() {
  
  const {tasks,renameValue,renameIndex} = useContext(AppContext)

  console.log("renameValue",renameValue);

  return (

    <div>
      <h1>TODO-LIST</h1>
      <div>
        {
          (renameValue && renameIndex) ? <RenameAdder id={renameIndex} /> : <TaskAdder></TaskAdder>
        }
        
      </div>
      <div>
        <TaskRender tasks={tasks}/>
      </div>
    </div>
    
    
    
  );
}

export default App;
