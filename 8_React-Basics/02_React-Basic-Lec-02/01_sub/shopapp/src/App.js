import "./App.css";
import Products from "./Components/Products";
import NewProduct from "./Components/NewProduct";


function App() {

  // products details

  const products = 
  [
    {
      id: 'p1',
      title: "Nirma",
      amount: 100,
      date : "2021-8-10",
    },

    {
      id: 'p2',
      title: "surf excel",
      amount: 200,
      date: "2021-8-10",
    },

    {
      id: 'p3',
      title: "tide",
      amount: 130,
      date: "2021-8-10",
    },

    {
      id: 'p4',
      title: "arial",
      amount: 100,
      date: "2021-8-10",
    }

  ];

  function printProductData(data)
  {
    console.log("output");
    console.log(data);
  }

  return(
      <div className="main-div">
        <NewProduct printProductFunc={printProductData}></NewProduct>
        <Products items={products} />
      </div>
      
  );
}

export default App;
