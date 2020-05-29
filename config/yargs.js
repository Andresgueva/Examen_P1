const archivo = {
    demand: true,
    alias: 'f',
    desc: 'archivo csv'
}

const anio = {
    default: 1960,
    alias: 'y',
    desc: 'Año de suscripción'
}
const pais = {
    demand: 'ECU',
    alias: 'C',
    desc: 'Nombre del archivo JSON'
}
const argv = require('yargs')
    .command('publicar', 'Publicar Resultado', {
        archivo,
        anio,
        pais

    })
    .command('guardar', 'Almacenar resultados ', {
       archivo,
       anio,
       pais
    })
    .argv;

//exportamos el modulo
module.exports = {
    argv
}
