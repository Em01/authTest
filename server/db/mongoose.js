const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//allows us to use promises in our mongoose code.

mongoose.connect('')
.then(() => console.log('DB Connected'))
.catch(err => console.log(err));

module.exports = mongoose;
