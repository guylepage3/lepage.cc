// Hold application secrets and config for PRODUCTION environment
module.exports = {
  mailchimpAPI: process.env.MAILCHIMP_API,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  gmailSecret: process.env.GMAIL_SECRET
};