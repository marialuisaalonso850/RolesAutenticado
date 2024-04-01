const express = require('express');
const reservaController = require('../controllers/reservaController');
const router = express.Router();
const { isCliente ,isUsuario , verifyToken } = require('../middlewares/authJWt');

router.post("/",isUsuario, reservaController.createReserva);
router.get("/", reservaController.getAllReservas);
router.put("/:id", reservaController.updateReserva);
router.get("/:id", reservaController.getReservaById);
router.delete("/cancel/:id", reservaController.cancelReserva); 
router.delete("/:id", reservaController.deleteReserva); 

module.exports = router;