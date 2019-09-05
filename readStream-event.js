const fs = require('fs');
const readStream = fs.createReadStream('./assets/file-sistem/exemplo.html'); // arquivo em questao

readStream.on('open', () => { // esse metodo dispara alguma acao quando o arquivo em questao é aberto
    console.log('arquivo aberto');
});