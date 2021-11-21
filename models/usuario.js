const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorip"],
  },
  correo: {
    type: String,
    require: [true, "El nombre es obligatorip"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "La contraseña es obligatoria"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    require: true,
    emun: ["ADMIN_ROLE", "USER_ROLE"],
    default:'USER_ROLE'
  },
  estado: {
    type: Boolean,
    default: true,
  },
  materia: [{
    type: Schema.Types.ObjectId,
    ref: "Materia",
    require: false,
  }],
});

UsuarioSchema.methods.toJSON = function(){

    const {__v,password,_id,...usuario} = this.toObject();
     usuario.uid = _id;
    return usuario;


}

module.exports = model("Usuario", UsuarioSchema);
