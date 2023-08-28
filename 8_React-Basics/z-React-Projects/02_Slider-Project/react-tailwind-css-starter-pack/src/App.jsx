import "./App.css";
import data from "./data";
import Cards from "./Components/Cards";

function App() {
  console.log(data);
  return (
    <div>
      <p>slider simple</p>

      <div>
        <Cards data={data} />
      </div>
      
    </div>
  );
}

export default App;
