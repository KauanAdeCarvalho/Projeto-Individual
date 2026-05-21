var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.post("/responder", function (req, res) {
    comentariosController.responder(req, res);
});

router.get("/listar", function (req, res) {
    comentariosController.listar(req, res);
});


module.exports = router;