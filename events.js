const events = require('events');
const eventEmitter = new events.EventEmitter();

// cria uma acao para o evento
const acaoDoEvento = () => {
    console.log('Evento ouvido');
}

// atribui uma click pro evento e a acao para esse click
eventEmitter.on('ping evento', acaoDoEvento);

setTimeout(() => {
    // emite o evento
    eventEmitter.emit('ping evento');
}, 5000);