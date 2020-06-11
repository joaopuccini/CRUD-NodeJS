const Sequelize  = require('sequelize'); // CONEXAO BANCO

const sequelize = new Sequelize('postapp', 'root','0409',{
    rost: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}