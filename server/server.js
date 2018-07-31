const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//not using url encoded because only making json requests
// const bcrypt = require('bcrypt');

// let password = 'myPassword'

// let salt = bcrypt.genSaltSync(12);
// let hashedPassword = bcrypt.hashSync(password, salt);
// console.log('my hashed password is equal to -', hashedPassword);

// let compare = bcrypt.compareSync(password, hashedPassword);
// console.log(compare, 'compare');

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server started on: ${PORT}`));