const mongoose = require('mongoose');
//import {mongoose} from "mongoose";

module.exports.conexxion =  async function connect()
{
    try{
    await mongoose.connect('mongodb://localhost/mongodbgraphql',{
    
    useNewUrlParset: true

    })
    console.log('CONEXION EXITOSA');
    }catch(e)
   {
    console.log('ERROR AL CONECTARSE= '+e);
   }
}

//module.exports = connect();