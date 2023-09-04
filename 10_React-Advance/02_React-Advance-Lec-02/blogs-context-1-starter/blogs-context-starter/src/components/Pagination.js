import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination(){

    const {page,handlePageChange,totalPages} = useContext(AppContext);

    return(
        <div className="w-full fixed bg-white bottom-0 border-t-2  border-t-2 flex py-3 items-center justify-around">
            <div>
                { page > 1 &&
                    (
                        <button className="p-2 mr-4 rounded-lg border border-violet-600" onClick={()=>handlePageChange(page-1)}>
                        Previous
                        </button>
                    )
                }

                { page < totalPages &&
                    (
                        <button  className="p-2 rounded-lg border border-violet-600" onClick={()=>handlePageChange(page+1)}>
                        Next
                        </button>
                    )
                }
                
            </div>
            <p>
                    Page {page} of {totalPages}
                </p>
        </div>
    )

}


export default Pagination;