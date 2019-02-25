const express = require('express');
const morgan = require('morgan');
const request = require('request');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const config = require('./config');

const app = express();

// Morgan http logging for debugging in terminal
app.use(morgan('short'));

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Subscribe route
app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;
  // console.log(req.body);
  // res.send('Hello, Guy');

  // Validation
  if (!email) {
    res.redirect('/subscribe-error');
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'pending',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us11.api.mailchimp.com/3.0/lists/30fdd4ddda',
    method: 'POST',
    headers: {
      Authorization: `auth ${config.mailchimpAPI}`,
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if(err) {
      res.redirect('/subscribe-error');
    } else {
      if(response.statusCode === 200) {
        res.redirect('/subscribe-success');
      } else {
        res.redirect('/subscribe-error');
      }
    }
  });
});

app.post('/send-email', (req, res) => {
  const output = `
  <p>
    <strong>First name</strong><br/>
    ${req.body.firstName}
  </p>
  <p>
    <strong>Last name</strong><br/>
    ${req.body.lastName}
  </p>
  <p>
    <strong>Email</strong><br/>
    ${req.body.email}
  </p>
  <p>
    <strong>Message</strong><br/>
    ${req.body.message}
  </p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'guylepage3@gmail.com',
        pass: `${config.gmailSecret}`
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Guy Lepage 📬" <guylepage3@gmail.com>', // sender address
    to: "guylepage3@gmail.com", // list of receivers
    subject: "New email from lepage.cc", // Subject line
    text: "New email from lepage.cc", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.redirect('/email-error');
      }
      res.redirect('/email-success');
  });
});

// Static path
app.use(express.static(path.join(__dirname, 'client/build')));

//Production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname = 'client', 'build', 'index.html'));
  })
}

//Build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//Server setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${ PORT }`))
