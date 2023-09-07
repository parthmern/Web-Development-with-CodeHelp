import {MdDelete} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';


const CartItem = ({item,itemIndex}) => {

  const dispatch= useDispatch();

  const removeFromCart =()=>{
    dispatch(remove(item.id));
    toast.success("item removed from cart");
  }

  return (
    <div className='border px-3 py-3 border-red-600 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center' >

      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>

        <div className='w-[50px] h-[60px]'>
          <img  src={item.image} />
        </div>

        <div>
          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
          <h1>{item.description.substring(0,50)}...</h1>
          <div>
            <p className='font-bold text-lg text-green-600'>${item.price}</p>
            <div className=' bg-red-200 w-[40px] group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3' onClick={removeFromCart}>
              <MdDelete />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
