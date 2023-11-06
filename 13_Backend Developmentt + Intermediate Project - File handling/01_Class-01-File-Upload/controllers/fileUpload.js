const File = require("../models/File");

// local file upload -> handler function
// ye sirf server k andar file upload karega koi location par
// client k ek path se media fetch karta hai then usko server k ek path par upload kar deta hai

exports.localFileUpload = async (req, res) =>{
    try{
        // fetch file from client
        const file = req.files.file ;
        console.log("file ==>",file);

        // "__dirname" ==> current working directory path 
        // file.name.split(".")[1] -- to get extension
        let path = __dirname + "/files/" + Date.now() + "." + file.name.split(".")[1] ;

        // mv - move
        file.mv(path, (error)=>{
            console.log(path);
            console.log("file not moved at path", error); // "undefined" means there is not error
        });

        res.json({
            success : true ,
            message : "Local file upload successfully" ,
        });


    }
    catch(error){
        console.log("error in localFileUpload", error);
    }
}