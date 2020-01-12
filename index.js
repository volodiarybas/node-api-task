const express = require('express');
const app = express();
const ejs = require('ejs');
const router = require('./node-app/routes/index');


//------------------------------------
app.set('view engine', 'ejs')

//------------------------------------

app.use('/', router)


app.listen('3000');