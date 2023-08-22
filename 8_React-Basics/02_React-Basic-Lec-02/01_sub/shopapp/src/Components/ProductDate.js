import './ProductDate.css';
import React from 'react';

const ProductDate=(props)=>
{
    //const month = props.date.toLocateString('en-US',{month:'long'});
    // const day = props.date.toLocateString('en-US',{day: '2-digit'});
    // const year = props.date.getFullYear() ;

    const month =props.date.slice(5,6);
    const year = props.date.slice(0,4);
    const day= props.date.slice(7);

    return(
        <div className='product-date'>
            <div className='product-date__month'>{month}</div>
            <div className='product-date__month'>{year}</div>
            <div className='product-date__month'>{day}</div>
        </div>
    );
}

export default ProductDate;