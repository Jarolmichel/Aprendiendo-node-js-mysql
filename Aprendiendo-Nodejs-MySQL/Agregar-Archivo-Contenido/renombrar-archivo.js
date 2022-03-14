//Bien para renombrar un archivo con nodejs utilizamos el siguiente modulo que es: "fs", usando el metodo fs.rename().


var fs = require('fs');


    fs.rename('new-file3.txt', 'new-filerename3.txt', function(err,) {//el metodo de 'fs'  rename() se utiliza de esta manera para renombrar archivos, el primer parametro que se le pasa es el archivo a renombrar y el segundo el nuevo nombre que tendra.
        if (err) throw err;
        console.log('File Rename!');
    });

