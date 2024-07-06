const mongoose = require("mongoose");
const deliviryPaySchema = new mongoose.Schema({
    deliviryPayDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    deliviryPayDeliviryId:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    deliviryPayallMoney:{
        type:Number,
       
    },
    deliviryrPayataxMoney:{
        type:Number,
      
    },
    deliviryPayShippingMoney:{
        type:Number,
        
    },
   
});
const  DeliviryPay = mongoose.model("DeliviryPay",deliviryPaySchema);
module.exports = {DeliviryPay};