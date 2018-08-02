const mongoose = require('mongoose');
const { databaseUsername, databasePassword } = require('../config');
mongoose.Promise = global.Promise;
//allows us to use promises in our mongoose code.

mongoose.connect(`mongodb://${databaseUsername}:${databasePassword}@ds159651.mlab.com:59651/auth`)

.then(() => console.log('DB Connected'))
.catch(err => console.log(err));

module.exports = mongoose;
