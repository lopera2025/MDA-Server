const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserInfo = new Schema ({
    _id:{
        type:String,
    },
    Name:{
        type:String,
        required:true,
    },
    Username :{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Path:{
        type:String,
        required:true,
    },
    runningDevice:{
        type:String,
    },
    HostName  : {
        type:String,
    }
})

const UserData = mongoose.model("UserDB",UserInfo);

module.exports = UserData;