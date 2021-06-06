const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const esquema_2 = require("./esquema_2");
const conn = require('./DataBase');

conn.conexxion();

const app = express();

app.get('/', (req, res) =>{//creatmos una ruta 

    res.json({
        message: "HOLA JS"
    })

});

app.use('/graphql', graphqlHTTP({//configurando /graphql para crear una funcion que permita integrar graphql en express
    // your config
    graphiql: true,
    schema: esquema_2,

    
})); 

//iniciando servidor en el puerto 3000
app.listen(4000, () => console.log('SERVIDOR CORRIENDO EN EL PUERTO 4000  http://localhost:4000/graphql'));
