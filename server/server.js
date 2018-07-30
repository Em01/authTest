const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');


app.get('/', (req, res) => {
    res.send('Welcome')
});

app.listen(3000);