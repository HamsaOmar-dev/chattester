const router = require('express').Router();
let User = require('../models/user.model.js');

router.route('/').post((req, res)=> {

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    uid: req.body.uid
  });

  newUser.save()
    .then(() => res.json("New User Added"))
    .catch((err) => res.status(400).json(err));
  
})

module.exports = router