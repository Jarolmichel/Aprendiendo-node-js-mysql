//Bien para borrar-eliminar un archivo con nodejs utilizamos el siguiente modulo que es: "fs", usando el metodo unlink().


var fs = require('fs');


    fs.unlink('new-file2.txt', function(err,) {//el metodo de 'fs' unlink() se utiliza de esta manera para eliminar archivos.
        if (err) throw err;
        console.log('Delete');
    });

