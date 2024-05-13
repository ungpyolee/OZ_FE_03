const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    picture : {
        type : String,
        required : true,
        default : 'https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png'
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;