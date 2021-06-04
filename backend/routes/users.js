const router = require('express').Router();
let User = require('../models/user.model');

//Get request
router.route('/').get((req, res) => {
    //Try to find the user in the database, then return the users using the json format, if there's an error than return status 400
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Post request
router.route('/add').post((req, res) => {

    //new username is part of the request
    const username = req.body.username;

    //Using the username passed in creat a new user
    const newUser = new User({username});

    //newUser is saved to the database, then return the confirmation using the json format, if there's an error than return status 400

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;