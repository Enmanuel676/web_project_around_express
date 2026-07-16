const mongoose=require('mongoose');

module.exports= mongoose.model('card', new mongoose.Schema({
    name:{
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true,
    },
    link:{
        type: String,
        required:true,
  validate: { 
            validator(value){
                return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(value);
            },
            message: 'URL inválida'
        }
   
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
ref:'user'
    },
    likes:{
        type: Array,
        default:[]
    },
    createdAt:{
        type: Date, 
        default: Date.now,
    }
}))
