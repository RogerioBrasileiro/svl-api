const express = require('express')
const app = express()
const db = require('./config/db')
const livros = require("./models/livros")

const routes = require('./routes/index')




db.on('error', console.log.bind('Erro ao conectar'))

db.once('open', () => {
    console.log('Conexão realizada')
})


// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )

const hostname = 'localhost'
const port = 5000
routes(app)

app.get('/', (req, res) => {
    res.send('Servidor subiu')
})

app.get('/livros', (req, res) => {
    livros.find((error, livros) => {
        res.status(200).json(livros)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

