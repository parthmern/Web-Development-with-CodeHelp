import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const {cart} = useSelector((state)=> state);

  const [totalAmount,setTotalAmount] = useState(0);

  console.log("cart-length",cart.length);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart])

  return(
    <div className="px-5 mt-9 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

<div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      {
        cart.length !== 0 ?
        (<div>

        {
          cart.map((item,index)=>{
            return(<CartItem key={item.id} itemIndex={index} item={item} />)
          })
        }

        </div>  
        ) :
        (
          <div>
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty</h1>
            <Link to="/">
              <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-widers">Shop Now</button>
            </Link>
          </div>

        )
      }
      
    </div>

    {
      cart.length >0 &&
      <div className="flex flex-col gap-14 gap-x-2" >

      <div className="flex flex-col gap-8 gap-x-2">
        <div className="font-semibold text-xl text-green-800 ">Your cart</div>
        <div className="font-semibold text-5xl text-green-700  -mt-5">SUMMARY</div>
        <div>Total Items: { cart.length} </div>
      </div>

      <div className="flex flex-col">
        <p className="text-gray-700 font-semibold text-xl">Total Amount : $ {totalAmount} </p>
        <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
          CheckOut Now
        </button>
      </div>
      
    </div>
    }

    

    </div>

    
  );
};

export default Cart;
