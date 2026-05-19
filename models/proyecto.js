const mongoose = require('mongoose')

const proyectochema = new mongoose.Schema({

    nombre: String,

    description: String,

    tareas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tarea"
    }]
});

module.exports = mongoose.model("Proyecto", proyectoschema);
    

