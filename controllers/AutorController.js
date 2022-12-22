const autor = require('../models/Autor')

class AutorController {

    static findAll = (req, res) => {
        autor.find((err, autor) => {
            res.status(200).json(autor)
        })
    }
    static findById = (req, res) => {
        const id = req.params.id
        autor.findById(id, (err, autor) => {
            //trata o erro ou o sucesso, baseado na função de callback, utilizando
            if (err) {
                res.status(404).send({ message: 'Autor não encontado', err: err.message })
            } else {
                res.status(200).json(autor)
            }
            res.status(200).json(autor)
        })
    }

    static createAutor = (req, res) => {
        let Autor = new autor(req.body)


        Autor.save(err => {
            if (err) {
                res.status(500).send({ message: 'Erro ao salvar o Autor.' })
            } else {
                res.status(201).json(Autor)
            }
        })
    }

    static updateAutor = (req, res) => {
        let id = req.params.id
        autor.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(404).send(
                    {
                        message: 'Erro ao atualizar'
                    })
            } else (
                res.status(200).send('Atualizado')
            )

        })

    }

    static deleteAutor = (req, res) => {
        const id = req.params.id
        autor.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send('Erro ao deletar')
            } else {
                res.status(200).send('Deletado')
            }
        })

    }
}

module.exports = AutorController