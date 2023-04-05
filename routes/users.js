const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

// Create new user
router.post('/', async (req, res) =>{
    // const { error } = validate(req.body);
    // if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('Already registered');

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    res.send(_.pick(user, ['name', 'email']));
});

module.exports = router;