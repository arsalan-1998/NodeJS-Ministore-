
const bcrypt = require('bcrypt');
const { con } = require('../model/connection');
const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/', (req,res) => {
    let data = req.body.register;
    const query = `insert into user(user,age,phone,email,password) 
    values('${data.name}','${data.age}','${data.phone}','${data.email}','${data.password}')`;
    con.query(query, (error,result) => {
        if(error) throw error;
        else {
            console.log(result);
            res.render('dashboard', {'data' : data.name});
        }
    });  
});


module.exports = app;