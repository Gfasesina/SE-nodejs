const mongoose = require('mongoose');

const ClasesSchema = new mongoose.Schema
({
    titulo:
    {
        type: String,
        required: true
    },
    descripcion: 
    {
        type: String,
        required: true,
        trim: true
    },
    horarios:
    {
        type: Date,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
})

module.exports = Clase = mongoose.model('Clase', ClasesSchema);