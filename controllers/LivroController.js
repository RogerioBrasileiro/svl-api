const livros = require('../models/livros')

class LivroController {

    static findAllBooks = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }
}

module.exports = LivroController