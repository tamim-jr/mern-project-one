const express = require('express');

const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res)=>{
    res.send(`Hello World! from server router js`);
});

router.post('/register', (req, res)=>{

    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({err:"Please filled the field properly"});
    }

    User.findOne({email:email})
    .then((userExist) => {
        if(userExist){
            return res.status(422).json({err:"This email already Exist"});
        }

        const user = new User({name, email, phone, work, password, cpassword});
        user.save().then(() =>{
            res.status(201).json({msg: "user registered successfuly"});
        }).catch((err) => res.status(500).json({err:"Failed to segistered"}));

    }).catch(err => {console.log(err);});
    // console.log(name);
    // console.log(email);
    // // res.json({msg: req.body});
    // res.send('This is my register page');

});

module.exports = router;