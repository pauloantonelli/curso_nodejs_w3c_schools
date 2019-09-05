##HTTP MODULE --->
#METODO PARA CRIAR UM SERVIDOR E ATRIBUIR UMA PORTA
.createServer();
#METODO PARA RECEBER E DECOMPOR UMA URL, PODENDO SEPARAR A QUERY VINDA NELA
.url.parse();
.url.parse().query;
#METODOS PARA RESPONDER A REQUISICAO HEADER/BODY
.writeHead();
.write();
.end()
#METODO PARA CRIAR E DISPONIBILIZAR UMA PORTA NO SERVIDOR
.listen();

##FILE SISTEM MODULE --->
#METODOS LEITURA DE ARQUIVOS
.readFile();

#METODOS ESCRITA DE ARQUIVOS
appendFile();
open();
writeFile();

#METODOS PARA ATUALIZAR ARQUIVOS
appendFile();
writeFile();

#METODOS PARA DELETAR ARQUIVOS
.unlink();

#METODOS PARA RENOMEAR ARQUIVOS
.rename();

#METODOS QUE DISPARAM EVENTOS
---> fs.createReadStream() ---> readStream.on();
---> new EventEmitter() ---> events;

#METODOS PARA FAZER UPLOAD PARA O SERVIDOR
---> lib formidable ---> formidable.parse();

#METODOS PARA TRABALHAR COM EMAIL
---> lib nodemailer ---> .createTransport() ---> .sendMail();