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

function buscarPodio() {
    const instrucaoSql = `
        SELECT login, acertos 
        FROM usuario u
        JOIN respostaQuiz r ON u.id = r.fkUsuario
        ORDER BY acertoS DESC LIMIT 10; 
    `;

    return database.executar(instrucaoSql);

}

function buscarQtdVotos() {
    const instrucaoSql = `
        SELECT COUNT(id) AS votos 
        FROM respostaAnimeFavorito;
    `;

    return database.executar(instrucaoSql);

}

function buscarTentativasQuiz() {
    const instrucaoSql = `
        SELECT COUNT(id) AS tentativas
        FROM respostaQuiz;
`;

    return database.executar(instrucaoSql);

}

function buscarAnimeMaisVotado() {
    const instrucaoSql = `
        SELECT resposta AS nomeAnime, COUNT(resposta) AS maisVotado
        FROM respostaAnimeFavorito
        GROUP BY resposta
        ORDER BY maisVotado DESC LIMIT 1;
    `;

    return database.executar(instrucaoSql);

}


module.exports = {
    buscarDadosAnimesFavoritos,
    buscarPorcentagem,
    buscarPodio,
    buscarQtdVotos,
    buscarTentativasQuiz,
    buscarAnimeMaisVotado
};