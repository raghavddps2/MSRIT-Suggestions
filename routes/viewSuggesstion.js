const path = require('path');
const express = require('express');
const suggData = require('./addSuggestion');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/view-suggesstions',(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','viewSuggesstion.html'));
    const suggestion = suggData.suggestion;
    res.render('viewSuggesstion',{suggs: suggestion,docTitle: 'View Suggestions'});
    
});
