const path = require('path');
const express = require('express');
const router = express.Router();

var suggestion = [];
const rootDir = require('../util/path');
router.get('/add-suggesstion',(req,res,next)=>{
    res.render('addSuggesstion');
});
router.post('/sugAdd',(req,res,next)=>{
    suggestion.push({title: req.body.title, tag: req.body.tag,department:req.body.service,message:req.body.message});
    res.render('sugAdd');
});


exports.routes = router;
exports.suggestion = suggestion;

