const { Router } = require("express");
const { check } = require("express-validator");
const {MateriaGet,materiaPost,materiaput,materiaDelete} = require("../controllers/materia");
const router = Router();

router.get("/", MateriaGet);
router.post("/", materiaPost);
router.put("/:id", materiaput);
router.delete("/:id", materiaDelete);

module.exports = router;
