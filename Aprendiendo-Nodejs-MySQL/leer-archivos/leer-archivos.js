//Bien para leer archivos con nodejs utilizamos el siguiente modulo que es: "fs".


const http = require('http'); //Este es el modulo que requerimos para poder haci poder utilizar el protocolo HTTP, para haci transferir datos al servidor.
var fs = require('fs');


const hostname = '127.0.0.1';//Esta seria la direccion ip que le estariamos dando a nuestro servidor.
const port = 3000;//Este seria el puerto indicado.

const server = http.createServer((req, res) => { //req es el argumento que representa la solicitud del cliente.
    fs.readFile('intex.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});//Bien con el metodo createServer(), lo que hacemos es crear el servidor en si.

server.listen(port, hostname, () => {
    console.log(`Server runnig at http://${hostname}:${port}/`);
});//Esto aqui de listen serviria para mostrarle al servidor cual es su direccion ip, el puerto que utiliza.

