const express = require("express")
const app  =  express()
const port  = 3001;

const db = require("./models")
const postRoute = require("./routes/post")

app.use("/product",postRoute)


db.sequelize.sync().then(()=>{
    app.listen(port ,()=>{
        console.log(`The server is running on port ${port}`)
    })
})
