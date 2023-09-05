const express = require('express')
const app = express()
const PORT = 3001






app.get('/', (req, res) => {
    res.send(`<h1>99 bottles of milk on the wall</h1> <a href='localhost:${PORT}/98'>Take one down, pass it around</a>`)
})


app.get('/:number', (req, res) => {
    let number = req.params.number
    if (number > 0){
        res.send(`<h1>${number} bottles of milk on the wall</h1><a href='localhost:${PORT}/${number - 1}'>Take one down, pass it around</a> `)
    }
    else {
        res.send('<h1>Input a number above 0</h1>')
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})