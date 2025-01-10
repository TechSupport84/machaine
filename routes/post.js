const express = require("express")
const router  =  express.Router()

router.get("/",(req,res )=>{
    res.json("Bonjour le  monde  ! ")
})

router.post("/", (req, res) => {

})




module.exports =  router
