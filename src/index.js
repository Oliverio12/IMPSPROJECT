const express = require('express');

//inicializando
const app = express();

//ajustes del servidor
app.set('port', process.env.PORT || 4000);

//inicializando el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
})