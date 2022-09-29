const express = require("express");

const app = express();


app.listen(8000, () => {
    console.log('started server at port 8000')
})

app.get('/me', (req, res) => {
    res.status(200).json({name:"alexander", age:25, country:"ecuador"})
})

app.post('/metas', (req, res) => {
    res.status(201).json({hobbies:["listen to mussic","play the game", "drink the juice"]})
})

app.patch('/metas', (req, res) => {
    res.status(202).json({goals:["monney","break time"]})
})

app.put('/business', (req, res) => {
    res.status(202).json({business:["globan","mercado libre", "facebook"]})
})



