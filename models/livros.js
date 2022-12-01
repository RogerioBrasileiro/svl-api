const mongoose = require('mongoose');
//criar o esquema da entidade no mongo
const livroSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    ano: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    genero: { type: String, required: true },
    numeroPaginas: { type: Number },
    favorite: { type: Boolean }
});
//se a collection não for criada, é criado automaticamente no código
const livros = mongoose.model('livros', livroSchema);

module.exports = livros