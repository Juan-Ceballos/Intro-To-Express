const express = require('express')
// console.log(express)
const app = express()

app.get('/', (request, response) => {
    response.json({message: 'Hello World!'})
})

app.get('/universe', (req, res) => {
    res.json({message: 'Hello Universe!'})
})

app.listen(3003, () => {
    console.log('Listening for requests on port 3003')
})