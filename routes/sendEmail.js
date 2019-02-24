const nodemailer = require('nodemailer');

module.exports = (app) => {
  app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request from lepage.cc</p>
    <h3>Details</h3>
    <ul>
      <li>
      <strong>First name</strong><br/>
        ${req.body.firstName}
      </li>
      <li>
      <strong>Last name</strong><br/>
        ${req.body.lastName}
      </li>
      <li>
      <strong>Email</strong><br/>
        ${req.body.email}
      </li>
      <strong>Message</strong><br/>
        ${req.body.message}
      </li>
    </ul>
    `;

    // async..await is not allowed in global scope, must use a wrapper
    async function main(){

      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let account = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: '000000000000-xxx.apps.googleusercontent.com',
            clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0'
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Guy Lepage 📬" <guylepage3@gmail.com>', // sender address
        to: "guylepage3@gmail.com", // list of receivers
        subject: "New email from lepage.cc", // Subject line
        text: "Hello world?", // plain text body
        html: "output" // html body
      };

      // send mail with defined transport object
      let info = await transporter.sendMail(mailOptions)

      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
  });
};