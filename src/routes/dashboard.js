var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarDadosAnimesFavoritos", function (req, res) {
    dashboardController.buscarDadosAnimesFavoritos(req, res);
});

router.get("/buscarPorcentagem", function (req, res) {
    dashboardController.buscarPorcentagem(req, res);
});

router.get("/buscarPodio", function (req, res) {
    dashboardController.buscarPodio(req, res);
});

router.get("/buscarQtdVotos", function (req, res) {
    dashboardController.buscarQtdVotos(req, res);
});

router.get("/buscarTentativasQuiz", function (req, res) {
    dashboardController.buscarTentativasQuiz(req, res);
});

router.get("/buscarAnimeMaisVotado", function (req, res) {
    dashboardController.buscarAnimeMaisVotado(req, res);
});

module.exports = router;