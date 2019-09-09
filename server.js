
//let http = require("http");

//let path = require("path");

let express = require('express');
let app=express();
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log(' app listening on port 3000!')
  });
  
  
  app.get('/check', function (req, res) {
    let username = req.query.username;
    let password = req.query.password;
   var message
   if( hasAccess(username, password) ){

    message="Access Permited"
   }
   else{
       message="No Access Permitioin"
   }
   res.send(message);
  });

  function hasAccess(username, password){
      return (username=="cheshin" && password=="1234")
  }