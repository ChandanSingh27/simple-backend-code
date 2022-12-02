const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

const port = process.env.PORT || 8080
const password = 1234567890 
const databaseUrl = "mongodb+srv://chandankumar:"+password+"@cluster0.habixda.mongodb.net/Practise"

mongoose.connect(databaseUrl).then(
    function(){
        app.get("/",function(req,res){
            res.send("home page")
        })

        const account = require("./../Router/createAccount")
        app.use("/account",account)
    }
)

app.listen(port)