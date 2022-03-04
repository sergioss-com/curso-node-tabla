const { crearArchivo } = require('./helpers/multiplicar');
//documentacion oficial https://yargs.js.org/docs/#additional-documentation
const argv = require('./config/yargs');
//documentacion oficial https://www.npmjs.com/package/colors
const colors = require('colors');

//console.clear();//Esta linea NO FUNCIONA y no limpia la consola en Cmder
process.stdout.write('\033c');//Esta linea SI FUNCIONA y limpia la consola de Cmder

//console.log( argv );

// const [ , , arg3 = 'base=5' ] = process.argv;//Argumentos que viene por la consola
// const [ , base = 5 ] = arg3.split('=');//separar por el caracter de IGUAL

//funcion de tipo promesa
crearArchivo( argv.b, argv.l, argv.h )
    .then ( nombreArchivo => console.log(colors.bgBrightRed(nombreArchivo, 'creado')) )
    .catch ( err => console.log(err) );