const http = require('http'); // modulo node para fazer requisicoes http externas
const url = require('url'); // modulo node para separar as querys vindas por url

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'}); // indica ao requisitante que o conteudo pode ser exibido como html
    const query = url.parse(req.url, true).query;
    res.write('As querys requisitadas forao: Mes ' + query.mes + ' e Ano: ' + query.ano);
    res.end();
});
server.listen(8081);