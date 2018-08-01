const express = require('express');
const router = express.Router();
const User = require('../db/models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
    const { email, password, username } = req.body
    console.log('This is the register route');

    let newUser = new User({
        email,
        password,
        username
    })

    newUser.save()
    .then((user) => {
        if(!user) {
            return res.status(400).send();
        }
        return res.status(201).send(user);
    })
    .catch(err => {
        if(err) {
            return res.status(400).send({error:err});
        }
        return res.status(400).send();
    })
});

router.get('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({username})
    .then((user) => {
        if(!user) {
            //todo consider status codes here 401/400
            return res.status(400).send()
        }

        bcrypt.compare(password, user.password)
        .then(match => {
            if(!match) {
                return res.status(401).send();
            }

            jwt.sign({_id: user._id})
        })
        .catch(err => {
            return res.status(401).semd({error: err});
        })
    })
    .catch((err) => {
        if(err) {
            return res.status(401).send(err);
        }

        return res.status(401).send();
    })

});




module.exports = router;