const bcrypt = require("bcryptjs");
const User = require("../models/User");

// signup route  handler
exports.signup = async (req, res) =>{
    try{
        // get data
        const {name, email, password, role} = req.body ;

        // if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success : false ,
                message : "user/email already exist" ,
            })
        }

        
        let hasedPassword ;
        try{
            // password encryption
            // secure password using BCRYPT = bcrypt.hash(<data>, <no of rounds>)
            hasedPassword = await bcrypt.hash(password, 10);
        }

        catch(error){
            return res.status(400).json(
                {
                    success : false ,
                    message : "error in hasing password" ,
                }
            )
        }

        // create user
        const user = await User.create({name, email, password, role});

        return(
            res.status(200).json(
                {
                    success : true ,
                    message : `user created successfully - ${user}`
                }
            )
        )

    }

    catch(error){
        console.log("errorr- user not created -- ");
        return(
            res.status(500).json({        
                    success : false ,
                    message : "user not created" ,
            })
        )
    }
    
}