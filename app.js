const express = require('express');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const path = require('path');

const app = express();

app.use(cors({
  // origin: 'http://localhost:3000'
}));

const port = process.env.port || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

// app.get("/",(req,res)=>{
//     console.log("HomePage");
//     res.send("Homepage");
// })

app.post("/sendemail", async (req,res)=>{

  const {fullName, email, date, time, service1, service2, service3} = req.body;

  if(!email){
    return res.status(204).json({message: "Field is Empty"});
  }

  const services = [];

  service1 == true ? services.push("Service 1") : null;
  service2 == true ? services.push("Service 2") : null;
  service3 == true ? services.push("Service 3") : null;

  let config = {
    service: 'gmail',
    auth: {
      user: 'usamaiftikhar530@gmail.com',
      pass: 'bcnzmrwpjrivbmtu'
    }
  }

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "salted",
    product: {
      name: "Self Shine",
      link: 'https://selfshine.sjsofts.xyz/'
    }
  })

  let response = {
    body: {
      name: "Appointment",
      intro: "New Appointment Booking!",
      dictionary: {
        Name: fullName,
        Email: email,
        Date: date,
        Time: time,
        Services: services
      },
      outro: "Have a nice Day"
    }
  }

  let mail = MailGenerator.generate(response);

  let message = {
    from: 'usamaiftikhar530@gmail.com',
    to: 'usamaiftikhar535@gmail.com',
    subject: 'Appointment',
    html: mail
  }

  transporter.sendMail(message).then(()=>{
    return res.status(201).json({
      msg: "You Should Reveive an Email"
    })
  }).catch((error)=>{
    return res.status(500).json({ error })
  })
})



//Static Files
app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})



app.listen(port, ()=>{
    console.log("Server Start Listen on Port " + port);
})