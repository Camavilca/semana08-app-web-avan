const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

let schema_producto = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: String,
    precio: { type: String, required: true }
});

module.exports = mongoose.model('producto', schema_producto, 'producto');

