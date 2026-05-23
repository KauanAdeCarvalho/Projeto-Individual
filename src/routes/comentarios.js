var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.post("/comentar", function (req, res) {
    comentariosController.comentar(req, res);
});

router.get("/listar", function (req, res) {
    comentariosController.listar(req, res);
});


module.exports = router;