const mongoose = require('mongoose')

const usuariochema = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: true
    },

    email: { 
        type: String,
        unique: true,
        required: true
    },
                
    contraseña: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model("Usuario", usuariochema);
    
