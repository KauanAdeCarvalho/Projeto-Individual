var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/responder", function (req, res) {
    quizController.responder(req, res);
});

router.get("/conferirAnimeFavorito", function (req, res) {
    quizController.conferirAnimeFavorito(req, res);
});

module.exports = router;