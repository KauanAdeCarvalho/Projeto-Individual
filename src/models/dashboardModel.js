var database = require("../database/config");

function buscarDadosAnimesFavoritos() {
    const instrucaoSql = `
        SELECT resposta, COUNT(resposta) AS votos
        FROM respostaAnimeFavorito
        GROUP BY resposta;
    `;
    return database.executar(instrucaoSql);
}

function buscarPorcentagem() {
    const instrucaoSql = `
    SELECT ROUND((SUM(acertos) / SUM(acertos + erros)) * 100,2) AS porcentagemAcerto, 
    ROUND((SUM(erros) / SUM(acertos + erros)) * 100, 2) AS porcentagemErro 
    FROM respostaQuiz;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosAnimesFavoritos,
    buscarPorcentagem
};