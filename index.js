const core = require('@actions/core')
const github = require('@actions/github')

function saludar(nombre){
    const mensaje = 'Buenos dias' + nombre;
    return mensaje;
}

try{
    const payloadEvento = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`Payload evento: ${payloadEvento}`);
    console.log(`Este es el mensaje a mandar: ${mensaje}`);
    const name = core.getInput('nombre');
    core.setOutput('mensaje', saludar(name));   
} catch(error){
    core.setFailed(error.message);
}