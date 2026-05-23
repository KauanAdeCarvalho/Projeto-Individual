var database = require("../database/config");

function responder(comentario, fkUsuario) {

    let instrucaoSql = `
        INSERT INTO comentarios (comentario, fkUsuario)
        VALUES ('${comentario}', '${fkUsuario}');
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    responder
};



function listar() {
    const instrucaoSql = `
        SELECT login, comentario 
        FROM usuario 
        JOIN comentarios ON fkUsuario = usuario.id;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    responder,
    listar
};