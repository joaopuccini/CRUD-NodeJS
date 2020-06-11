const express    = require("express");
const app        = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Post       = require('./models/Post'); 

// CONFIGURAÇÕES
    // TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    
    // BODY PARSER 
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// REQUISICAO ENVIANDO O FORMULARIO DO HTML

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    app.get('/cadastrar', function(req, res){
        res.render('formulario');
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(){
            res.send('Houve algum erro: ' +erro)
        })
    })

app.listen(3000, function()
{
    console.log('Servidor rodando na url: http://localhost:3000');
});
//localhost 3000