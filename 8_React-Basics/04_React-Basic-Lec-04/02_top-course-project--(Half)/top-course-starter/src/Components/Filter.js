import React from "react";

const Filter = ( props ) =>
{
    //console.log(props.filterDataData);
    let filterData= props.filterDataData;
    
    return(
        <div>
            {
                filterData.map( (data)=>
                    (<button key={data.id}>{data.title}</button>)
                 )
            }
        </div>
    );
}

export default Filter ;
