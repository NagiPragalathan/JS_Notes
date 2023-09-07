var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nnagipragalathan@gmail.com',
    pass: '7401268091'
  }
});

var mailOptions = {
  from: 'nnagipragalathan@gmail.com',
  to: 'priyankabtech2020@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});