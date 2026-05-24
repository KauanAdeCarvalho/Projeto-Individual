var dashboardModel = require("../models/dashboardModel");


function buscarDadosAnimesFavoritos(req, res) {
    dashboardModel.buscarDadosAnimesFavoritos()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarPorcentagem(req, res) {
    dashboardModel.buscarPorcentagem()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarPodio(req, res) {
    dashboardModel.buscarPodio()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarQtdVotos(req, res) {
    dashboardModel.buscarQtdVotos()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarTentativasQuiz(req, res) {
    dashboardModel.buscarTentativasQuiz()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function buscarAnimeMaisVotado(req, res) {
    dashboardModel.buscarAnimeMaisVotado()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}


module.exports = {
    buscarDadosAnimesFavoritos,
    buscarPorcentagem,
    buscarPodio,
    buscarQtdVotos,
    buscarTentativasQuiz,
    buscarAnimeMaisVotado
};