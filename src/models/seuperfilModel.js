var database = require("../database/config");

function buscarAcertosQuiz() {

    let instrucaoSql = `
        SELECT acertos, fkUsuario AS id
        FROM respostaQuiz;
    `;

    return database.executar(instrucaoSql);

}

function buscarQtdComentarios() {

    let instrucaoSql = `
        SELECT comentario, fkUsuario AS id 
        FROM comentario;
    `;

    return database.executar(instrucaoSql);

}

function buscarAnimeFavorito(){

    let instrucaoSql = `
        SELECT resposta, fkUsuario AS id
        FROM respostaAnimeFavorito;
    `;

    return database.executar(instrucaoSql);

}


module.exports = {
    buscarAcertosQuiz,
    buscarQtdComentarios,
    buscarAnimeFavorito
};