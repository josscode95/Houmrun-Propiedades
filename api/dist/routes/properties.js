"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const propertiesController_1 = require("../controller/propertiesController");
const router = (0, express_1.Router)();
router.get('', propertiesController_1.obtenerPropiedades);
router.put('/:id', propertiesController_1.actualizarPropiedad);
module.exports = router;
