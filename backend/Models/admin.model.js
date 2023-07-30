const mongoose =require("mongoose")


const AdminSchema=mongoose.Schema({
    name :{type:String,require:true},
    email :{type:String,require:true},
    avatar :{type:String,require:true},
    password :{type:String,require:true},
},{
    versionKey:false
})





const AdminModel=mongoose.model("user",AdminSchema)

module.exports={
    AdminModel
}