const { response } = require("express");
const Materia = require("../models/materia");

const materiaPost = async (req, res = response) => {
  const { nombre } = req.body;
  const materias = new Materia({ nombre });

  const materia = await materias.save();

  res.json({
    msg: "HOla mundo",
    materia,
  });
};

const materiaput = async (req, res = response) => {
  const { id } = req.params;
  const { ...resto } = req.body;

  const body = await Materia.findById(id);
  console.log(resto.puntaje);
  
  restos = {
    "puntaje": resto.puntaje + body.puntaje,
    "puntajeTotal": resto.puntajeTotal + body.puntajeTotal,
    "numeroPruebas": resto.puntajeTotal + body.puntajeTotal
  } 
  console.log(restos);

  const materia = await Materia.findByIdAndUpdate(id, restos,{ "new": true });

  res.json({
    materia,
    msg: "HOla mundo",
  });
};

const MateriaGet = async (req, res = response) => {
  const materias = await Materia.find({ estado: true });

  res.json({
    materias,
    message: "hola",
  });
};

const materiaDelete = async (req, res = response) => {
  const { id } = req.params;

  //TODO Forma 2
  const materia = await Materia.findByIdAndUpdate(id, { estado: false });

  res.status(200).json({
    materia,
  });
};

module.exports = {
  MateriaGet,
  materiaPost,
  materiaput,
  materiaDelete,
};
