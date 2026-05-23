var database = require("../database/config");

function comentar(comentario, fkUsuario) {

    let instrucaoSql = `
        INSERT INTO comentario (comentario, fkUsuario)
        VALUES ('${comentario}', '${fkUsuario}');
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

function listar() {
    const instrucaoSql = `
        SELECT login, comentario 
        FROM usuario 
        JOIN comentario ON fkUsuario = usuario.id;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    comentar,
    listar
};