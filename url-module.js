const http = require('http');
const url = require('url');
const urlAdress = 'http://localhost:8083/default.htm?mes=fevereiro&ano=2019';

const urlParse = (endereco, res) => {
    const urlAdress = url.parse(endereco, true);
    const response = res;
    console.log('urlAdress: ', urlAdress);
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write('<br>\n O host dessa url é ' + urlAdress.host);
    response.write('<br>\n o hostname é ' + urlAdress.hostname);
    response.write('<br>\n o path principal é ' + urlAdress.path);
    response.write('<br>\n o pathname é ' + urlAdress.pathname);
    response.write('<br>\n o path das querys são ' + urlAdress.search);
    response.write('<br>\n 1ª query enviada ' + urlAdress.query.mes);
    response.write('<br>\n 2ª query enviada ' + urlAdress.query.ano);
    response.end();
};


const server = http.createServer((req, res) => {
    urlParse(urlAdress, res);
});
server.listen(8083);