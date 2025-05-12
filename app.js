const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

//Configuração do express-handlebars
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',function(req,res){
    res.render('formulario');
});

app.post('/cadastrar',function(req,res){
    let nome = req.body.nome;
    console.log(req.nome);
    res.end();
});

console.log('Ok!')
app.listen(8000);