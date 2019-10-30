const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');


// console.log(process.argv);

// Modificamos el ejercicio para que pueda recibir la base por consola.

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}


// console.log(argv.base)

//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];