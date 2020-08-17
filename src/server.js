const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

const { pageLanding, pageStudy, pageGiveClasses }  = require('./pages')


//configurar o nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configurar arquivos estáticos (Css, scripts, imagens)
server.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
// Porta que esta sendo ouvida.
.listen(3333);