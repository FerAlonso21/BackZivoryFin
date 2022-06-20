const express = require ('express');
const app = express();

let enviar = require('../control/correo');

app.post('/envio',enviar.envio);
app.get('/',(req,res)=>{
    res.sendFile(process.cwd()+"/dist/final-v2/index.html");
});

module.exports=app;

