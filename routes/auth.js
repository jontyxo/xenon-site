const router = require("express").Router();
const User = require('../models/User')
const {registerValidation,loginValidation} = require('../validation');
const bcrypt=require('bcryptjs');


router.post('/register', async (req,res) => {
//VALIDATE data before user is created.
const {error} = registerValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

//checking if the user already exists
const emailCheck = await User.findOne({email: req.body.email});
if(emailCheck) return res.status(400).send('Email already exists!');

//Hash the password
const salt = await bcrypt.genSalt(10);
const hashPassword = await bcrypt.hash(req.body.password, salt);
//create new user
    const user = new User({
     name: req.body.name,
     email: req.body.email,
     password: hashPassword
 });
 try {
   const savedUser = await user.save();
   res.send(savedUser);
 }
 catch (err) {
res.status(404).send(err);
 }
})

//LOGIN
router.post('/login',async (req,res) => {
//VALIDATE data before user is created.
const {error} = loginValidation(req.body);
if(error) return res.status(400).send(error.details[0].message);

//checking if the user already exists
const user = await User.findOne({email: req.body.email});
if(!user) return res.status(400).send("Email Doesn't Exist!");
//Checking the password
const validPass=await bcrypt.compare(req.body.password,user.password);
if(!validPass) return res.status(400).send("Invalid Password!");
//Create and assgign token
// const token=jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
// res.header('auth-token',token).send(token);
// res.send("Logged IN!");

res.send(user)
});


module.exports = router;
