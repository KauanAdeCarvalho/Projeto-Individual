var express = require("express");
var router = express.Router();

const seuperfilController = require("../controllers/seuperfilController");

router.get("/buscarAcertosQuiz", function (req, res) {
    seuperfilController.buscarAcertosQuiz(req, res);
});

router.get("/buscarQtdComentarios", function (req, res) {
    seuperfilController.buscarQtdComentarios(req, res);
});

router.get("/buscarAnimeFavorito", function (req, res) {
    seuperfilController.buscarAnimeFavorito(req, res);
});


module.exports = router;