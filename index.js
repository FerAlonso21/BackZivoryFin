const express = require('express');
const app= express();
let cors = require('cors');
const bodyparser=require('body-parser');
const port= process.env.PORT || 3000;
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./rutas/correorutas'));

app.listen(port,()=>{
    console.log('escuchando');
});

app.use(express.static(process.cwd()+'/dist/final-v2/'));