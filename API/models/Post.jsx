const mongoose = require('mongoose');


const PostTheme = new mongoose.SchemaType(
    {
   title:{
    type:String,
    required:true,
    unique:true,
   },
   descr:{
    type:String,
    required:true,
   },
   photo:{
    type:String,
   },
   username:{
    type:String,
    required:true,
   },
   categories:{
    type:Array,
    required:false,
    
   },
}, 
{
    timestamps: true
}
);

module.exports = mongoose.model('Post', PostTheme);