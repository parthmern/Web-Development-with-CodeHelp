const Todo = require("../models/Todo");

exports.getTodo = async (req,res) =>{
    try{
        //fetch all todo items from DB
        const todos = await Todo.find({});
        
        //res
        res.status(200).json(
            {
                success : true ,
                data : todos ,
                message : "entire todo data is fetched",
            }
        )

    }

    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success : false , 
                error : error.message , 
                message : "server error",
            }
        )
    }
}

//=========================================================
exports.getTodoById = async (req,res) =>{

    try{
        const id = req.params.id ;
        // extract todo basis on id -- jaha par nhi _id === id ho jaye wo return kr do
        const todo = await Todo.findById ({ _id: id} );

        // data for given id is not found
        if(!todo) {
            return (
                res.status(404).json(
                    {
                        success : false ,
                        message : "No data found",
                    }
                )
            )
        }

        // data for given id found
        res.staus(200).json(
            {
                success : true ,
                data : todo,
                message : "Todo ID data successfully fetched",
            }
        )
            
        
    }
    catch(error){
        console.log(error);
        res.status(500).json(
            {
                success : false , 
                error : error.message , 
                message : "server error",
            }
        )
    }
}