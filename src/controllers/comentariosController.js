var comentariosModel = require("../models/comentariosModel");

function responder(req, res) {

    let comentario = req.body.comentarioServer;
    let fkUsuario = req.body.fkUsuarioServer;

    if (comentario == undefined) {
        res.status(400).send("Comentário está undefined!");
    }

    else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    }

    else {

        comentariosModel.responder(comentario, fkUsuario)
            .then(function(resultado) {

                res.status(200).send("Resposta salva com sucesso!");

            }).catch(function(erro) {

                console.log(erro);
                res.status(500).json(erro.sqlMessage);

            });

    }

}

function listar(req, res) {
    comentariosModel.listar()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}


module.exports = {
    responder,
    listar
};