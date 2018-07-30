const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');


app.get('/', (req, res) => {
    res.send('Welcome')
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server started on: ${PORT}`));