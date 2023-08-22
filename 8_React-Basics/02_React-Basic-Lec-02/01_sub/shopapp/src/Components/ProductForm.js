import { useState } from 'react';
import './ProductForm.css';


function ProductForm(props)
{
    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');

    function titleChangeHandler(event)
    {
        console.log("title chnagedd", event.target.value);
        setTitle(event.target.value);
    }

    function dateChangeHandler(event)
    {
        console.log("date chnagedd", event.target.value);
        setDate(event.target.value);
    }

    function submitHandler(event)
    {
        event.preventDefault();
        console.log("submitted");

        const productData = 
        {
            title : newTitle ,
            date : newDate,
        }

        console.log(productData);

        props.printProduct(productData);

        setTitle('');
        setDate('');

    }




    return(
        <form className='new-product-form'>
            <div className='new-product-title'>
                <label>title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product-date'>
                <label>date</label>
                <input type='text' value={newDate} onChange={dateChangeHandler}></input>
            </div>
            <div className='new-product-button'>
                <button type='submit' onClick={submitHandler}>add Product</button>
            </div>
        </form>
    );

}

export default ProductForm ;