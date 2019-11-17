
const express = require('express');
const app = express.Router();

app.get('/', (req,res) => {
    res.render('dashboard');
});

app.post('/', (req,res) => {
    let data = req.body.log; 
    console.log(data);
    res.render('dashboard', { 'data' : data.username });
});

module.exports = app;