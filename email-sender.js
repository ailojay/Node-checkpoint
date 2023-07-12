const nodemailer = require('nodemailer');

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  service: 'your_email_service',
  auth: {
    user: 'your_email@example.com',
    pass: 'your_password',
  },
});

// Create email options
const mailOptions = {
  from: 'your_email@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent successfully!', info.response);
  }
});
