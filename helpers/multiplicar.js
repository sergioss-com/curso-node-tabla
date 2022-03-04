const fs = require('fs');//libreria requerida para grabar en un archivo
const colors = require('colors/safe');;

//funcion como asincrona se crea al usar async, con esto por defecto ya esta regresando una promesa.
//Una funcion Promesa es al usar async en la declaracion de la funcion,
//por lo que en el llamado de la funcion podremos usar .then() y .catch(), propios de las promesas
const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';//A salida se le quitaron las propiedades de la libreria colors ya que al guadar el archivo introducia caracteres raros
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base*i }\n`;
            consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base*i }\n`;
        }

        if (listar) {
            console.log('============================'.brightCyan);
            console.log('       Tabla del: '.yellow, colors.brightGreen(base));
            console.log('============================'.brightCyan);
            console.log(consola);
        }        
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        return(`tabla-${base}.txt`);
    } catch (error) {
        throw error;
    }
    
    //Tener acceso al "File system" desde javaScript, esto es algo que no se puede hacer directamente
    //en el navegador web, pero en nodeJS tenemos acceso a el.
    //Endiendase "File system" por carpetas, directorios, todo lo que se encuentre en el servidor.
    /* fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`tabla-${base}.txt creada`);
    }) */
}

module.exports = {
    crearArchivo //crearArchivo: crearArchivo
}