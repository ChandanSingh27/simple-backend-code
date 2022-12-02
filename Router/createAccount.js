const router = require("express").Router()
const AccountCollection = require("./../Model/account")

router.get("/", function (req, res) {
    res.send("Account infomation page..")
})
router.post("/createAccount",async function(req,res){
    var account = new AccountCollection(req.body)
    await account.save(function(err){
        if(err){
            res.json({success:false,error:err})
            return;
        }else{
            res.json({success:true,data:account})
        }
    })
})
router.get("/users",async function(req,res){
    var users = await AccountCollection.find()
    res.json({success:true,data:users}) 
})

router.get("/users/:name",async function(req,res){
    const name = req.params.name
    var users = await AccountCollection.findOne({ name : name })
    if(!users){
        res.json({success:false,error:"user not found"})
        return
    }
    res.json({success:true,data:users}) 
})

router.delete("/deleteAccount",async function(req,res){
    const name = req.body.name
    var users = await AccountCollection.deleteOne({name:name})
    if(!users){
        res.json({success : false,error:"user not found"})
        return
    }
    res.json({success:true,data:users})
})

router.patch("/update",async function(req,res){
    const data = req.body
    var users = await AccountCollection.findByIdAndUpdate({_id:data._id},{contact:data.contact})
    if(!users){
        res.json({success : false,error:"user not found"})
        return
    }
    res.json({success:true,data:users})
})



module.exports = router