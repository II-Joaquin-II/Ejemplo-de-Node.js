/*
const htpp = require("http");
const servidor = htpp.createServer();
const puerto = 5000;

servidor.listen(puerto,()=>{
    console.log("Servidor en el puerto " + puerto);
})

*/

const express = require("express");
const app = express();
puerto = 5000;

app.listen(puerto,()=>{
    console.log("Servidor en el puerto " + puerto);
}); c 