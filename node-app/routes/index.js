const express = require('express');
const  router = express.Router();
const fetch = require('node-fetch');




router.get('/', (req,res)=>{
let result = [];   
    fetch('https://api.github.com/repos/nodejs/node/commits')
    .then(res => res.json())
    .then(res => result = res)
    .then ( () => {
        res.render('main',{result:result})
    });
})

router.get('/:login', (req,res)=>{
    let result = [];   
        fetch('https://api.github.com/repos/nodejs/node/commits')
        .then(res => res.json())
        .then(res => result =  res.filter(element => element.author.login == req.params.login)
        )
        .then ( () => {
            res.render('main',{result:result})
        });
    })

module.exports = router;