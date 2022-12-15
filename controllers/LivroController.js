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

    static createBook = (req, res) => {
        let livro = new livros(req.body)


        livro.save(err => {
            if (err) {
                res.status(500).send({ message: 'Erro ao salvar o livro.' })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }
    static updateBook = (req, res) => {
        const id = req.params.id
        livros.findOneAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).json({ message: 'Erro ao atualizar' })
            }
            res.status(204).json('Atualizado')
        })
    }
    static deleteBook = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send('Erro ao deletar')
            } else {
                res.status(200).send('Deletado')
            }
        })

    }

}

module.exports = LivroController