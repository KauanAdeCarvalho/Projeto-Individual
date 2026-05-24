var perguntasModel = require("../models/perguntasModel");

function enviarResultado(req, res) {

    let acertos = req.body.acertosServer;
    let erros = req.body.errosServer;
    let fkUsuario = req.body.fkUsuarioServer;

    if (acertos == undefined) {
        res.status(400).send("acertos está undefined!");
    }

    else if (erros == undefined) {
        res.status(400).send("erros está undefined!");
    }
    else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    }
    else {

        perguntasModel.enviarResultado(acertos, erros, fkUsuario)
            .then(function (resultado) {

                res.status(200).send("Resposta salva com sucesso!");

            }).catch(function (erro) {

                console.log(erro);
                res.status(500).json(erro.sqlMessage);

            });

    }

}

function verificarQuizResposta(req, res) {
    perguntasModel.verificarQuizResposta()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    enviarResultado,
    verificarQuizResposta
};