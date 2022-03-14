const http = require('http'); //Este es el modulo que requerimos para poder haci poder utilizar el protocolo HTTP, para haci transferir datos al servidor.

const hostname = '127.0.0.1';//Esta seria la direccion ip que le estariamos dando a nuestro servidor.
const port = 3000;//Este seria el puerto indicado.

const server = http.createServer((req, res) => { //req es el argumento que representa la solicitud del cliente.
    res.statusCode = 200; //aqui lo que hacemos es mostrar el estado de que esta todo bien.
    res.setHeader('content-Type', 'text/plain');//aqui el tipo de contenido que se estaria mostrando en nuestra pagina.
    res.end('Hello World');//aqui el contenido que se mostrara en dicha pagina.
});//Bien con el metodo createServer(), lo que hacemos es crear el servidor en si.

server.listen(port, hostname, () => {
    console.log(`Server runnig at http://${hostname}:${port}/`);
});//Esto aqui de listen serviria para mostrarle al servidor cual es su direccion ip, el puerto que utiliza.

