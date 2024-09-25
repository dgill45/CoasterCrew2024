const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Coaster = require('./models/coaster')

mongoose.connect('mongodb://localhost:27017/coastercrew')
    .then(() => console.log('Database connected'))
    .catch(err => console.log('connection error', err));

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/makecoaster', async (req, res) => {
    const coaster = new Coaster({ title: 'Kiddie Coaster', description: 'low voltage thrills!'});
    await coaster.save();
    res.send(coaster)
})

app.listen(3001, () =>{
    console.log('serving on port 3001')
})