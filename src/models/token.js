const mongoose = require('mongoose');


const TokenSchema = new mongoose.Schema({
    id: { type: Object }, 
    token: { type: String, required: true }, 
});


const Token = mongoose.model('token', TokenSchema);

module.exports = Token;
