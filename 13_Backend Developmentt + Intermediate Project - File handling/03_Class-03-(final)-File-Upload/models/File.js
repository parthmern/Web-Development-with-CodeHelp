const mongoose = require("mongoose");

const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = mongoose.Schema(
    {
        name : {
            type: String , 
            required : true ,
        },
        
        imgUrl : {
            type : String ,
        },

        tags : {
            type : String ,
        },

        email : {
            type : String ,
        }
    }
)

// pre() and post() MIDDLEWARES ?? what is --   learn
// pre() and post() must available before the "module.exports"

fileSchema.post("save", async function(doc){
    try{
        console.log("doc ==>", doc);  // doc == entry that created in DB is

        // transport for nodemailer
        let transporter = nodemailer.createTransport({
            host : process.env.MAIL_HOST ,
            auth : {
                user : process.env.MAIL_USER ,
                pass : process.env.MAIL_PASS ,
            }, 

        })

        // send mail
        const info = await transporter.sendMail({
            from: 'parth', // sender address
            to: doc.email, // list of receivers
            subject: "new file uploaded", // Subject line
            text: "Hello world?", // plain text body
            html: "<h2>Hello world?</h2> <p>file uploaded</p>", // html body
        });

        console.log("info=>", info);

    }
    catch(error){
        console.log("error in post middleware", error);

    }
})




const File = mongoose.model("File", fileSchema);
module.exports = File; 