const express = require('express')
const LivroController = require('../controllers/LivroController')

const routes = express.Router()

routes
    .get('/livros', LivroController.findAll)
    .get('/livro/:id', LivroController.findById)
    .post('/livro', LivroController.createBook)
    .put('/livro/:id', LivroController.updateBook)
    .delete('/livro/:id', LivroController.deleteBook)



module.exports = routes