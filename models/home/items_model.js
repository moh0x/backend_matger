const mongoose = require("mongoose");
const itemsSchema = new mongoose.Schema({
    itemNameEnglish:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    itemNameArabic:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    itemDescArabic:{
        type:String,
        required:true,
        minLength:6,
        maxLength:600,
        maxLength:300
       },
       itemDescEnglish:{
        type:String,
        required:true,
        minLength:6,
        maxLength:600
       },
       itemImage:{
        type:String,
        required:true,
        minLength:6,
        maxLength:200
       },
       itemCount:{
        type:Number,
        required:true,
        minLength:6,
        maxLength:200
       },
       itemActive:{
        type:Boolean,
        required:true,
        default:true
       },
       itemPrice:{
        type:Number,
        required:true,
        minLength:6,
        maxLength:200
       },
       itemDisCount:{
        type:Number,
        minLength:6,
        maxLength:100
       },
       itemCatId:{
        type:String,
        required:true,
        minLength:6,
        maxLength:100
       },
       itemLikesCount:{
        type:Number,
        required:true,
     
       },
       itemLikesArray:{
        type:Array,
        required:true,
       },
       itemCartCount:{
        type:Number,
        required:true,    
       },
       itemDate:{
        type:Date,
        default:Date.now(),
        required:true,    
       },
       itemNewPrice:{
        type:Number,
        required:true,
        minLength:6,
        maxLength:200
       },
       itemCity:{
        type:String,
        maxLength:3,
        required:true
       },
       itemMiniCipality:{
        type:String,
        maxLength:30
       },
       itemDistrict:{
        type:String,
        maxLength:30
       },
       itemImages:{
        type:Array,
        default:[]
       },
       vendorId:{
        type:String,
        maxLength:30
       }
   
});
const Item = mongoose.model("Item",itemsSchema);
module.exports = {Item};

