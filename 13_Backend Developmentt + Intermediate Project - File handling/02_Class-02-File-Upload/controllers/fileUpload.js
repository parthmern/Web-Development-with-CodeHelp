const File = require("../models/File");


// ======================================

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

// ======================================
// imageUpload handler

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

const cloudinary = require("cloudinary").v2 ;
async function uploadFileToCloudinary(file, folder, quality){
    const options = {folder};

    if(quality){
        options.quality = quality ;
    }

    // upload to cloudinary
    // file.tempFilePath -- means jab wo file client side se fetch hogi tab ek temporary path par save hogi express server k
    // then wo cloudinary par upload hone k baad automatically delete ho jayega
    options.resource_type = "auto" ;
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
    try{
        // data fetch from client
        const {name, tags, email} = req.body ;
        console.log(name, tags, email);

        // here "imageFile" is key 
        const file = req.files.imageFile ;
        console.log(file);

        // validation on data (file type is supported or not)
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase() ;
        console.log("filetype==>", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return(
                res.status(400).json(
                    {
                        success : false ,
                        message : "file format not supported",
                    }
                )
            )
        }

        // FILE formate is Supported -- 
        // upload to cloudinary (filefrom client, folder name of cloudinary, quality(10,20...,100))
        // qaulity is extra you can avoid it
        const response = await uploadFileToCloudinary(file, "trialParth", 20);
        console.log(response);

        // then DB me entry saved
        const fileData = await File.create(
            {
                name, 
                tags, 
                email, 
                imgUrl : response.secure_url ,
            }
        )
        
        // res successfull
        res.json(
            {
                success : true ,
                message : "img successfully uploaded", 
                fileData : fileData ,
            }
        )
    }

    catch(error){
        console.log("error in imageUpload handler ==>", error);
        res.status(400).json(
            {
                success : false , 
                message : "error in imageUpload handler" ,
            }
        )
    }
}

// ======================================
// videoUpload handler

exports.videoUpload = async (req, res) =>{
    try{
        const {name, tags, email} = req.body ;
        console.log(name, tags, email);

        // ".videoFile" is key
        const file = req.files.videoFile ;
        console.log(file); 

        const supportedTypes = ["mp4", "mov" ];
        const fileType = file.name.split(".")[1].toLowerCase() ;
        console.log("filetype==>", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return(
                res.status(400).json(
                    {
                        success : false ,
                        message : "file format not supported",
                    }
                )
            )
        }

        // file size should be less than 4MB (1000000 byte = 1 mb)
        if(file.size > 4000000){
            return(
                res.status(400).json(
                    {
                        success : false ,
                        message : "file size is greater than 4MB",
                    }
                )
            )
        }

        const response = await uploadFileToCloudinary(file, "trialParth");
        console.log(response);

        const fileData = await File.create(
            {
                name, 
                tags, 
                email, 
                imgUrl : response.secure_url ,
            }
        )

        res.json(
            {
                success : true ,
                message : "img successfully uploaded", 
                fileData : fileData ,
            }
        )
    }
    catch(error){
        res.status(400).json({
            success : false , 
            message : `videoUpload handler error ==> ${error}` ,
        })
    }
}

