// importing todoSchema from models
const Todo = require("../models/Todo");

// route handler

exports.createTodo = async (req,res) =>{

    try{
        // extarct title and desc from req body
        const {title,description} = req.body;

        // create new todo obj
        const response = await Todo.create({title,description});

        // send json res with success status
        res.status(200).json(
            {
                success : true,
                data: response,
                message:"Entry created successfully"
            }
        )

    }
    catch(error){
        console.log("ERROR-",error);
        res.status(500).json(
            {
                success : false,
                data : "internal server error",
                message : error.message,
            }
        )
    }
}