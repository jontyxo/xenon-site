const router = require("express").Router();
const Form = require('../models/ContactForm')


router.post('/contactform', async (req,res) => {

//create new Form
    const form = new Form({
     name: req.body.name,
     email: req.body.email,
     desc: req.body.desc
 });
 try {
   const savedForm = await form.save();
   res.send(savedForm);
 }
 catch (err) {
res.status(404).send(err);
 }
})



module.exports = router;
