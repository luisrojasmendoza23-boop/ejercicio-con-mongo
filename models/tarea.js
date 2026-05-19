const mongoose = require('mongoose')

const Tareachema = new mongoose.Schema({
    titulo: String,

    descripcion: String,

    estado: {
        type: String,
        enum: ["pendiente", "en progreso", "completada"],
        default: "pendiente"

    },

    fechacreacion: { 
        type: Date,
        default: Date.now
    
    },
                
    fechalimite: Date,

    Asignado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }
});

module.exports = mongoose.model("Tarea", Tareachema);
    