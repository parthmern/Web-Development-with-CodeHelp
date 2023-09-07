import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import {add,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state)=>(state));

  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.success("Item removed From cart");
  }



  return (
    <div className=" border w-[300px] border-red-600 group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
      <div >
        <p>{post.title.substring(0, 17)}...</p>
      </div>
      <div className="min-w-[100px]" >
        <p>{post.description.substring(0, 17)}...</p>
      </div>
      <div >
        <img className="aspect-1 w-[100px] h-[150px]" src={post.image} />
      </div>
      <div >
        <p>$ {post.price}</p>
      </div>

      <div className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">
        {
          cart.some((p)=> p.id == post.id) ? <button
          onClick={removeFromCart}
          >Remove Item</button>  : 
          <button
          onClick={addToCart}
          >Add to Cart</button> 
        }

      </div>

    </div>
  );
};

export default Product;
