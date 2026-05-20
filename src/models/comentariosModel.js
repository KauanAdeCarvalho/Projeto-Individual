var database = require("../database/config");

function responder(comentario, fkUsuario) {

    let instrucaoSql = `
        INSERT INTO comentarios (comentario, fkUsuario)
        VALUES ('${comentario}', ${fkUsuario});
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    responder
};