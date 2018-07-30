const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const bcrypt = require('bcrypt');

let password = 'myPassword'

let salt = bcrypt.genSaltSync(12);
let hashedPassword = bcrypt.hashSync(password, salt);
console.log('my hashed password is equal to -', hashedPassword);

let compare = bcrypt.compareSync(password, hashedPassword);
console.log(compare, 'compare');

app.get('/', (req, res) => {
    res.send('Welcome')
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server started on: ${PORT}`));