const Sequelize = require("sequelize");
const sequelize = new Sequelize("tarefas", "root", "pedrinho10", {
    host: "localhost",
    dialect: "mysql"
});

/*
sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");
}).catch((error) => {
    console.log("Falha ao conectar: " +error);
})
*/

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}



