var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarDadosAnimesFavoritos", function (req, res) {
    dashboardController.buscarDadosAnimesFavoritos(req, res);
});

router.get("/buscarPorcentagem", function (req, res) {
    dashboardController.buscarPorcentagem(req, res);
});


module.exports = router;