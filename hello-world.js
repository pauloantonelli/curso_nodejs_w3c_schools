const http = require('http'); // modulo node para fazer requisicoes http externas
const relogio = require('./time-object-module'); //modulo personalizado importado

http.createServer((requisicaoCliente, respostaServidor) => {
    respostaServidor.writeHead(200, { 'Content-Type': 'text/html'}); // indica ao requisitante que o conteudo pode ser exibido como html
    respostaServidor.write('Ola Mundo!');
    respostaServidor.write('A data atual é: ' + relogio.Relogio()); // resposta ao requisitante
    respostaServidor.end(); // fim da resposta
}).listen(8080);