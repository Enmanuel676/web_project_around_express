const mongoose=require('mongoose');

module.exports= mongoose.model('user', new mongoose.Schema({

    name: {
        type: String,
       maxlength: 30,
        minlength :2,
        required: true,
    },
    about: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    avatar:{
        type: String,
        required: true,
        validate:{
validator(value){
            return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(value);
        }
        }
        

    }
}))

