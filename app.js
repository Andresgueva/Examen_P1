
const argv = require('./config/yargs').argv;
const buscar = require('./buscador/buscar');
const colors = require('colors');
x
let comando = argv._[0];




switch (comando) {
    case 'publicar':
        let consulta = buscar.imprimir(argv.archivo, argv.anio, argv.pais);
        break;
    case 'guardar':
        let guardar = buscar.guardar(argv.archivo, argv.anio, argv.pais);
        break;
    default:
        console.log('Comando no reconocido');
}
