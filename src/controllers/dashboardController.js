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

module.exports = {
    buscarDadosAnimesFavoritos,
    buscarPorcentagem,
    buscarPodio
};