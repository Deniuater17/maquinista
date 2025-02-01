// models/Tema.js
const mongoose = require('mongoose');

const TemaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  completado: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Tema', TemaSchema);
