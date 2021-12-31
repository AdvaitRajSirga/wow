const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require('nodemailer');
const { stringify } = require("querystring");


app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
  });
  app.use(express.static(__dirname + "/app.css"));

  app.use(bodyParser.urlencoded({ extended: true }))

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });


  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'demonyatoclan@gmail.com',
        pass: 'advaitojaslohith'
    }
});


  app.post("/", (req, res) => {
  var subName = req.body.Name
  var print = req.body
  console.log(print)

  
let mailDetails = {
    from: 'demonyatoclan@gmail.com',
    to: 'demonyatoclan@gmail.com',
    subject: 'Feedback',
      text: "Details:" + " " + JSON.stringify(print),
    }
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});

res.send("Hello " + subName + ", Thank you, wait till we send you the message for you.")
});