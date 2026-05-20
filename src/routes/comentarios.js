var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.post("/responder", function (req, res) {
    comentariosController.responder(req, res);
});

module.exports = router;