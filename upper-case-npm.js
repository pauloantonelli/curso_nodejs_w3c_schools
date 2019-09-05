const http = require('http');
const upper = require('upper-case');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write(upper('olá mundo!'));
    res.end();
});
server.listen(8085);