const {Schema,model} = require("mongoose")

const AccountCollection = Schema({
    name:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    addOn:{
        type:Date,  
        default:Date.now()
    }
})

module.exports = model("userAccount",AccountCollection)