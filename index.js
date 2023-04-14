//EXPRESS
const express = require("express");
const app = express();
const port = 4040;

//MANIPULAÇÃO DE POSTS
const Posts = require("./models/Posts");

//HANDLEBARS
const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//BODY PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//CREATE SERVER
app.get("/", (req, res) => {
    Posts.all({order: [['id', 'DESC']]}).then(() => {
        res.hender('home')
    })

    res.render("home",  {
        posts: posts
    });
})

app.get("/cad", (req, res) => {
    res.render("forms");
});

app.post("/add", (req, res) =>{
    Posts.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
    }).then(() => {
        res.redirect("/");
    }).catch(() => {
        res.send("Houve um erro");
    })
});

app.listen(port, ()=>{
    console.log("Servidor rodando em http://localhost:3030");
});
















