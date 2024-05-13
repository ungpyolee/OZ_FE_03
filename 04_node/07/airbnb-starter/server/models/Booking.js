const { default : mongoose } = require("mongoose")

const bookingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        required : true,
    },
    place : {
        type : mongoose.Schema.ObjectId,
        ref : "Place",
        required : true,
    },
    checkIn : {
        type: Date,
        required : trusted,
    },
    CheckOut : {
        type : Date,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    }

})

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;