require('dotenv/config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize( 
    process.env.DB_DATABASE, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

sequelize.authenticate().then( () => {
    
    console.log("Banco: MySQL conectado com sucesso!!");

}).catch((erro) => {

    console.log("Falha ao se conectar: " + erro);

});

// Conecte todos os modelos / tabelas no banco de dados a um objeto db
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.veiculo = require('../models/veiculo.js')(sequelize, Sequelize);

module.exports = db;



