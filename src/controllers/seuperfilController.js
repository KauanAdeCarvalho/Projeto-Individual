var seuperfilModel = require("../models/seuperfilModel");

function buscarAcertosQuiz(req, res) {
    seuperfilModel.buscarAcertosQuiz()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarQtdComentarios(req, res) {
    seuperfilModel.buscarQtdComentarios()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarAnimeFavorito(req, res) {
    seuperfilModel.buscarAnimeFavorito()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}


module.exports = {
    buscarAcertosQuiz,
    buscarQtdComentarios,
    buscarAnimeFavorito
};