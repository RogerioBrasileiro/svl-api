const livros = require('../models/livros')

class LivroController {

    static findAll = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id
        livros.findById(id, (err, livros) => {
           //trata o erro ou o sucesso, baseado na função de callback, utilizando
            if (err) {
                res.status(404).send({ message: 'Livro não encontado', err: err.message })
            } else {
                res.status(200).json(livros)
            }
            res.status(200).json(livros)
        })
    }
}

module.exports = LivroController