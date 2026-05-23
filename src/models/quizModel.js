var database = require("../database/config");

function responder(resposta, fkUsuario) {

    let instrucaoSql = `
        INSERT INTO respostaAnimeFavorito (resposta, fkUsuario)
        VALUES ('${resposta}', '${fkUsuario}');
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    responder
};