const express = require('express');
const router = express.Router();


router.get('/' , (req,res) => {
    res.render('pages/home' , {title : "home"});
});

router.get('/about' , (req,res) => {
    res.render('pages/about' , {title : "about"});
});

module.exports = router;