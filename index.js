
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
// const jwt = require('jsonwebtoken');
const Home = require('../project/Home/index');
const Dashboard = require('../project/Routes/dashboard');
const Register = require('../project/Routes/register');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'blah_blah', 
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));

app.use('/', Home);
app.use('/dashboard', Dashboard);
app.use('/account/register', Register);

const port = process.env.port || 3000;
app.listen(port, (error) => {
    if(error) throw error;
    console.log(`listening on port ${port}...`);
});