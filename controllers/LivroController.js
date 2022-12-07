const livros = require('../models/livros')

class LivroController {

    static findAll = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id
        livros.findById((err, livros) => {
            res.status(200).json(livros)
        })
    }
}

module.exports = LivroController