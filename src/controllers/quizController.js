var quizModel = require("../models/quizModel");

function responder(req, res) {

    let resposta = req.body.respostaServer;
    let fkUsuario = req.body.fkUsuarioServer;

    if (resposta == undefined) {
        res.status(400).send("Resposta está undefined!");
    }

    else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    }

    else {

        quizModel.responder(resposta, fkUsuario)
            .then(function(resultado) {

                res.status(200).send("Resposta salva com sucesso!");

            }).catch(function(erro) {

                console.log(erro);
                res.status(500).json(erro.sqlMessage);

            });

    }

}

module.exports = {
    responder
};