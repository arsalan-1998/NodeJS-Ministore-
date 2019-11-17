
var bcrypt = require('bcrypt');

bcrypt.hash('asd', 10, (err, hash) => {
    console.log(hash);
});