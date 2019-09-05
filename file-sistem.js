const http = require('http'); // modulo node para fazer requisicoes http externas
const fileSistem = require('fs'); //modulo que nos permite acessar e trabalhar com os arquivos do sistema da maquina atual

const caminhoAbsolutoAssets = './assets/file-sistem/';
const arquivoExterno = 'exemplo-2.html';
const conteudoInternoArquivo = `
<html>
<body>
<h1>My Header</h1>
<p>My paragraph.</p>
</body>
</html>`;

const readFile = (res) => {
    const response = res;
    fileSistem.readFile(caminhoAbsolutoAssets + arquivoExterno, (erro, data) => {
        response.writeHead(200, { 'Content-type': 'text/html'} );
        response.write(data);
        response.end();
    });
}
const appendFile = (arquivo, conteudo, res) => {
    const nomeArquivo = arquivo;
    const conteudoArquivo = conteudo;
    const response = res;
    fileSistem.appendFile(nomeArquivo, conteudoArquivo, (erro) => {
        if (erro) console.error(erro);
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write('Arquivo ' + arquivo + ' criado');
        response.end();
    });
}

const openFile = (arquivo, res) => {
    const arquivoExterno = arquivo;
    const response = res;
    fileSistem.open(arquivoExterno, 'w', (erro) => {
        if (erro) console.error(erro);
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write('arquivo aberto: ' + arquivoExterno);
        response.end();
    });
};
const writeFile = (arquivo, conteudo, res) => {
    const arquivoExterno = arquivo;
    const response = res;
    fileSistem.writeFile(arquivoExterno, conteudo, (erro) => {
        if (erro) console.error(erro);
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.write('Salvo');
        response.end();
    });
};

const unlink = (arquivo, res) => {
    const arquivoExterno = arquivo;
    const response = res;
    fileSistem.unlink(arquivoExterno, (erro) => {
        if (erro) console.error(erro);
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write('arquivo ' + arquivoExterno + ' deletado com sucesso!');
        response.end();
    });
}

const rename = (arquivo, novoNomeArquivo, res) => {
    const arquivoExterno = arquivo;
    const novoNomeArquivoExterno = novoNomeArquivo;
    const response = res;
    fileSistem.rename(arquivoExterno, novoNomeArquivoExterno, (erro) => {
        if (erro) console.log(erro);
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write('O arquivo ' + arquivoExterno + ' foi renomeado para ' + novoNomeArquivo);
        response.end();
    });
}
const server = http.createServer((req, res) => {
    // readFile(res);
    // appendFile(caminhoAbsolutoAssets + 'exemplo.html', conteudoInternoArquivo, res); // edita/cria(se nao existir) arquivo e conteudos, colocando os dados novos no final do arquivo
    // openFile(arquivoExterno, res);
    // writeFile(caminhoAbsolutoAssets + arquivoExterno, conteudoInternoArquivo, res); // edita/cria(se nao existir) arquivos e conteudos
    // unlink('exemplo-renomeado.html', res);
    rename(caminhoAbsolutoAssets + arquivoExterno, caminhoAbsolutoAssets + 'exemplo-renomeado.html', res);
});

server.listen(8082);