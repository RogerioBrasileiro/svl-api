const express = require('express')
const AutorController = require('../controllers/AutorController')

const routes = express.Router()

routes
    .get('/autores', AutorController.findAll)
    .get('/autor/:id', AutorController.findById)
    .post('/autor', AutorController.createAutor)
    .put('/autor/:id', AutorController.updateAutor)
    .delete('/autor/:id', AutorController.deleteAutor)



module.exports = routes
