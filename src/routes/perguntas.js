var express = require("express");
var router = express.Router();

var perguntasController = require("../controllers/perguntasController");

router.post("/enviarResultado", function (req, res) {
    perguntasController.enviarResultado(req, res);
});

module.exports = router;