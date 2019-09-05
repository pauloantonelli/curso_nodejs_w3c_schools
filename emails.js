const nodemailer = require('nodemailer');

const objectMail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pauloantoneli@gmail.com',
        pass: 'zguymyucwlkptwfj'
    }
});
const mailOptionsText = {
    from: 'pauloantoneli@gmail.com',
    to: 'pauloantonelli@hotmail.com, pauloantonelli@icloud.com', // envia para mais de um destinatario
    subject: 'Enviando primeiro email usando nodejs lol',
    text: 'Esta sendo interessante de mais lol'
}
const mailOptionsHtml = {
    from: 'pauloantoneli@gmail.com',
    to: 'pauloantonelli@hotmail.com, pauloantonelli@icloud.com', // envia para mais de um destinatario
    subject: 'Enviando primeiro email usando nodejs lol',
    html: `
    <h1>Bem Vindo</h1>
    <p>Mandando html promo xp</p>
    `,
}

objectMail.sendMail(mailOptionsHtml, (erro, info) => {
    if (erro) {
        console.error('erro: ', erro);
    } else {
        console.log('email enviado com sucesso ' + info.response);
    }
});