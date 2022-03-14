//Bien para agregar un archivo o contenido con nodejs utilizamos el siguiente modulo que es: "fs", usando el metodo appendFile().


var fs = require('fs');


    fs.appendFile('new-file1.txt', 'This is my text.', function(err,) {//el metodo de 'fs' appendFile() se utiliza de esta manera para agregar archivos o contenido a dicho archivo.
        if (err) throw err;
        console.log('Update');
    });

