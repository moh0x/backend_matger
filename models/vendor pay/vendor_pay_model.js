const mongoose = require("mongoose");
const vendorPaySchema = new mongoose.Schema({
    vendorPayDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    vendorPayVendorId:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    vendorPayallMoney:{
        type:Number,
       
    },
    vendorPayataxMoney:{
        type:Number,
      
    },
    vendorPaySalesMoney:{
        type:Number,
        
    },
   
});
const  VendorPay = mongoose.model("VendorPay",vendorPaySchema);
module.exports = {VendorPay};