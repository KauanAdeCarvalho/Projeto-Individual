var database = require("../database/config");

function buscarDadosAnimesFavoritos() {
    const instrucaoSql = `
        SELECT resposta, COUNT(resposta) AS votos
        FROM respostaQuiz
        GROUP BY resposta;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosAnimesFavoritos,
};