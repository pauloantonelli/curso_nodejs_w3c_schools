const http = require('http');
const url = require('url');
const fs = require('fs');

let resExterno = undefined;
const absoluteAssetPath = "./assets/file-sistem/";

const urlParse = (urlReq) => {
    const nomeArquivo = url.parse(urlReq.url, true).path;
    readFile(nomeArquivo);
}

const readFile = (arquivo) => {
    fs.readFile(absoluteAssetPath + arquivo, (erro, data) => {
        if (erro) {
            outputDataError('Arquivo nao existe, tente novamente ' + erro);
        } else {
            outputData(data);
        }
    });
};

const outputDataError = (data) => {
    resExterno.writeHead(404, {'Content-type': 'text/html'});
    resExterno.write(data);
    resExterno.end();
}
const outputData = (data) => {
    resExterno.writeHead(200, {'Content-type': 'text/html'});
    resExterno.write(data);
    resExterno.end();
}


const server = http.createServer((req, res) => {
    urlParse(req);
    resExterno = res;
});
server.listen(8084);