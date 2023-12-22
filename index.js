const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// NODEMAILER

const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: 'demo01@gmail.com',  //For sending email from gmail, use your gmail id which used in Google OAuth 
    to: 'demo02@gmail.com',  //For sending email to multiple users, use array like this :- [email1, email2, email3]
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };


  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });