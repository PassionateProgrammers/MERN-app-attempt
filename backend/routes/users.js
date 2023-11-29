const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require ('bcrypt');

router.route('/:username').get((req, res) => {
    const username = req.params.username;
    User.findOne({ username })
        .then(user => {
            if (!user) {
                return res.status(404).json('User not found');
            }
            res.json(user);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post(async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance with username, email, and hashed password
      const newUser = new User({
        username,
        email,
        password: hashedPassword, // Save the hashed password
      });
  
      await newUser.save();
      res.json('User added');
    } catch (err) {
      res.status(400).json('Error: ' + err);
    }
  });

module.exports = router;