const mongoose = require('mongoose');

//Here we created the structure of user or schema of user
const contactFormSchema = new mongoose.Schema({
    name:{
        type: String,
required: true
    },
    email:{
        type: String,
        required: true,
        max:255
    },
    desc:{
        type: String,
        required: true,
        max:1024,
        min:6
    },
    date:{
        type: Date,
        default: Date.now
    }
})



module.exports=mongoose.model('ContactForm',contactFormSchema);


//Schema is structure of a database.