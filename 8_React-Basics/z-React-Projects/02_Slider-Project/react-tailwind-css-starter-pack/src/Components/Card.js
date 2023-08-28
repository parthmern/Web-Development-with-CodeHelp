import React from "react";


const Card = ({data}) =>{
    console.log("card changed");
    return(
        <div>
            <p>id= {data.id}</p>
            <p>name={data.name}</p>
        </div>
    )
}

export default Card;