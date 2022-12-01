const express = require('express')
const db = require('./config/db')
//const livros = require("./")

db.on('error', console.log.bind('Erro ao conectar'))

db.once('open', ()=> {
    console.log('Conexão realizada')
})

const hostname = 'localhost'
const port = 5000

// app.get('/', (req, res) => {
//     res.send('Servidor subiu')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

