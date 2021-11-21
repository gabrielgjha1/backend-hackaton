const { Schema, model } = require("mongoose");

const MateriaSchema = Schema({
  nombre: {
    type: String,
    required: [true, "EL campo es obligatorio"],
  },
  estado: {
    type: Boolean,
    default: true,
    required: true,
  },
  puntajeTotal: {
    type: Number,
    default: 0,
  },
  numeroPruebas: {
    type: Number,
    default: 0,
  },
  puntaje: {
    type: Number,
    default: 0,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
});

module.exports = model("Materia", MateriaSchema);
