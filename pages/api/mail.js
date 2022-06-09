export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: process.env.MAIL_PORT,     
      host: process.env.MAIL_HOST,
         auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
           },
      secure: false,
    });
    
    const mailData = {
        from: 'formation@gmail.com',
        to: req.body.to,
        subject: `${req.body.subject}`,
        text: req.body.message + " | Sent from: " + req.body.to,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.to}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    console.log(req.body)
    res.send('success')
  }