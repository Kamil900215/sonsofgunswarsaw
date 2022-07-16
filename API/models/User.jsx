const mongoose = require('mongoose');


const UserScheme = new mongoose.SchemaType({
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    profilepic:{
        type:String,
        default: '',
    },

}, 
{
    timestamps: true
}
);

module.exports = mongoose.model('User', UserScheme);
// module.exports = User;