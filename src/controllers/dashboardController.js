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


module.exports = {
    buscarDadosAnimesFavoritos
};