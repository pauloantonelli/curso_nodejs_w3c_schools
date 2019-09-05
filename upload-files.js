const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const form = `
<html>
    <body>
        <h1>My Upload Form</h1>
        <form action="fileupload" method="post" enctype="multipart/form-data">
            <input type="file" name="fileToUpload" />
            <br/>
            <input type="submit"/>
        </form>
    </body>
</html>
`;
const sucessoPag = `
<html>
    <body>
        <h1>My Upload Form</h1>
        <p>Sucesso! Arquivo carregado com sucesso</p>
    </body>
</html>
`;

const server = http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        const formRecebeArquivo = new formidable.IncomingForm();
        formRecebeArquivo.parse(req, (erro, campos, arquivos) => {
            const pastaTemporaria = arquivos.fileToUpload.path;
            const pastaPermanente = '/home/uchiha-paulo/' + arquivos.fileToUpload.name;
            fs.rename(pastaTemporaria, pastaPermanente, (erro) => {
                if (erro) console.error(erro);
                // res.write('arquivo salvo permanentemente');
                res.write(sucessoPag);
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(form);
        res.end();
    }
});

server.listen(8086);