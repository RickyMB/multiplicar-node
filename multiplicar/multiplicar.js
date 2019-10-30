const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} x ${i} = ${base * limite}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {

            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, err => {
            if (err)
                reject(err)
            else
                resolve(`tabla-del-${base}-al-${limite}.txt`.red)
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}