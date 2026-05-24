var database = require("../database/config");

function enviarResultado(acertos, erros, fkUsuario) {

    let instrucaoSql = `
        INSERT INTO respostaQuiz (acertos, erros, fkUsuario)
        VALUES ('${acertos}', '${erros}', '${fkUsuario}');
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

function verificarQuizResposta() {

    let instrucaoSql = `
        SELECT fkUsuario AS id 
        FROM respostaQuiz;
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    enviarResultado,
    verificarQuizResposta
};