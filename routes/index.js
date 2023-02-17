const express = require('express');
const contactoRoutes = require("./contacto.routes");
const inicioRoutes = require("./inicio.routes");
const altaRoutes = require("./alta.routes");
const nosotrosRoutes = require("./nosotros.routes");
const avisoDePrivacidadRoutes = require("./aviso-de-privacidad.routes");

const router = express.Router();

router.use(contactoRoutes);
router.use("/", altaRoutes);
router.use("/alta", altaRoutes);
router.use(inicioRoutes);
router.use(nosotrosRoutes);
router.use(avisoDePrivacidadRoutes);

module.exports = router;
