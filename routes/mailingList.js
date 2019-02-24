const config = require('../config');

module.exports = (app) => {
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
};