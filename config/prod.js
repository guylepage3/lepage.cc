// Hold application secrets and config for PRODUCTION environment
module.exports = {
  mailchimpAPI: process.env.MAILCHIMP_API,
  gmailSecret: process.env.GMAIL_SECRET
};