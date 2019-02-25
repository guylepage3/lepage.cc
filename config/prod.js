// Hold application secrets and config for PRODUCTION environment
module.exports = {
  mailchimpAPI: process.env.MAILCHIMP_API,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  googleAccessToken: process.env.GOOGLE_ACCESS_TOKEN,
  gmailSecret: process.env.GMAIL_SECRET
};