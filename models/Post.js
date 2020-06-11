const db = require('./db'); // CONSTANTE PARA CONEXAO COM BANCO DE DADOS

//CRIANDO A TABELA

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post

// fazer uma consulta no banco para ver se essa tabela ja existe e criar. Se nao continua o processo

//Post.sync({force: true})

