const express = require('express')

const routes = express.Router()

routes
    .get('/autores', AutorController.findAll)
