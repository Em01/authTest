const jwt = require('jsonwebtoken');

let payload = {
    _id: 'helloJWT'
}

let secret = '12345678'

// let token = jwt.sign(payload, secret, options || callback);
// let token = jwt.sign(payload, secret, {
//     algorithm: 
// });

// console.log(token);
//contains jwt algorithm-hs256 jwt type, can change type of algorithm we use, payload & secret

let decoded = jwt.verify(token, secret);
console.log(decoded);
//iat is created at date.