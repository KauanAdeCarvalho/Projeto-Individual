var database = require("../database/config");

function enviarResultado(acertos, erros, fkUsuario) {

    let instrucaoSql = `
        INSERT INTO perguntasQuiz (acertos, erros, fkUsuario)
        VALUES ('${acertos}', '${erros}', '${fkUsuario}');
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    enviarResultado
};