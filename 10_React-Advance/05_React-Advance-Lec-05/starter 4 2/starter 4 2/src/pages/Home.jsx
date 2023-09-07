import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div className="flex flex-[3] w-[90%] flex-wrap mx-auto">
      <div className="">
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="w-full flex flex-wrap mx-auto items-center justify-center ">
          {
            posts.map( (post) => (
            <Product key={post.id} post={post}/>
          ) )
          }
        </div>) :
        <div>
          <p>No Data Found</p>
        </div> 
      }
      </div>
      
    </div>
  );
};

export default Home;
