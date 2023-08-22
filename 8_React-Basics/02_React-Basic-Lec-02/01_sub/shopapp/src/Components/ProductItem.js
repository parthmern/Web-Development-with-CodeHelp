import './ProductItem.css';
import ProductDate from './ProductDate';
import Card from './Card';
import React, {useState} from 'react';

const ProductItem = (props) =>
{
    const [title,setTitle] =useState(props.title);

    //let title = props.title;

    function clickHandler(){
        //title = "popcorn";
        setTitle("popcorn");
        console.log("clciked");
    }

    return(
        <Card className="product-item">
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item__description'>
                <h2>{title}</h2>
            </div>
            <button className='btn' onClick={clickHandler} >add to cart</button>
        </Card>
    );
}

export default ProductItem ;