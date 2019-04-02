const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.set('view engine','pug');
app.set('views','views');
const addSuggRoute = require('./routes/addSuggestion');
const viewSuggRoute = require('./routes/viewSuggesstion');

const rootDir = require('./util/path');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')));
app.get(addSuggRoute.routes);
app.get(viewSuggRoute);



app.get('/',(req,res,next)=>{
     res.render('index');
    
});

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});
app.listen(3000);