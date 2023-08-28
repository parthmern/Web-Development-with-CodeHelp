import React, { useState } from "react";
import Card from "./Card";

const Cards = ({data}) =>{

    console.log("data in cards create=",data);

    const [index,setIndex] = useState(0);
    console.log("present INDEX=",index);

    function leftHandler(){

        if(index == 0){
            setIndex(data.length -1);
        }
        else{
            setIndex(index-1)
        }
    }

    function rightHandler(){
        if(index == data.length-1){
            setIndex(0)
        }

        else{
            setIndex(index+1)
        }
    }
    

    return(
        <div>

            <div>
                <Card data={data[index]} ></Card>
            </div>

             <div>
                <button onClick={leftHandler} >-</button>
                <button onClick={rightHandler} >+</button>
            </div>
        </div>
      

       
    );
}

export default Cards;