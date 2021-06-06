const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    negocio: String,
    firstname: String,
    lastname: String,
    precio: Number,
    tipo: String
});

module.exports = model ('User', userSchema);
