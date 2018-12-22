var express = require("express");

var router = express.Router();

router.get("/sravan",(req,res,next)=>{

    console.log("sravan executed...");
    res.send("hello worlfd sravan");

})

router.get("/",(req,res,next)=>{

    res.send("hello worlfd");

});

module.exports = router;