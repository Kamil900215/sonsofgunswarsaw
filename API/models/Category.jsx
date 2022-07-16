const mongoose = require('mongoose');


const CategoryTheme = new mongoose.SchemaType(
   {
    name:{
        type:String,
        required:true,
    }
   }
);

module.exports = mongoose.model('Category', CategoryTheme);