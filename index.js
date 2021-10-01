var express = require('express');

var app = express();

var random = require('./modules/module');

var crypto = require('crypto');

app.get('/', (req, res) => {
 crypto.randomBytes(20, (err, buf) =>{
   var cypt = buf.toString('hex');
   res.send(`Random Characters:  ${random.RandomChar(20)} <br> Cypto Characters ${cypt}`);

 })
 // res.send('Random Characters: ' + random.RandomChar(1));
 // if i change the value in the function it will display that number of string like if i pass 40 then 40 character of random string generated or i pass any number base on that number random string will be generated
})

app.listen(3000, () =>{
 console.log('App is running at port 3000');
});