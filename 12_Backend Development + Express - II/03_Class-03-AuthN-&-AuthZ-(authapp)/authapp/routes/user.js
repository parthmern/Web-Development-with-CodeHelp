const express = require("express");
const router = express.Router();

const {login, signup} = require("../controllers/Auth");

router.post("/login", login);
router.post("/signup", signup);

// own middlewares
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

// protected Routes

router.get("/test", auth, (req, res)=>{
    res.json({
        success : true ,
        message : "AUTH middleWare protected route"
    })
})

// jo routes me middleWares ka order hoga usii order me middlewares work karenge
// ex. "/student" route me <auth ,isStudent> 2 middelwares hai toh -- sab se pehle "Auth" then "isStudent" check hoga
router.get("/student", auth, isStudent, (req,res)=>{
    res.json(
        {
            success : true ,
            message : "student and auth middleWare protected route" ,
        }
    )
} )

router.get("/admin", auth, isAdmin, (req,res)=>{
    res.json(
        {
            success : true ,
            message : "admin and auth middleWare protected route" ,
        }
    )
} )

module.exports = router;