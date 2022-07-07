const fs = require('fs')
const path = require('path')
const name = require('./name')
const forgotPasswordTemplate = fs.readFileSync(path.join(__dirname, '..', 'src', 'templates', 'forgot-password.ejs'), { encoding: 'utf-8' })

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ebccc102-fd58-4aa0-b2de-6998ad5f9520'),
  },
  apiToken:{
    salt: env("API_TOKEN_SALT", '4a001faa-3440-4d4b-a6ee-f6299de98a6f')
  },
  watchIgnoreFiles: ['**/graphql/**', '**/config/sync/**'],
  forgotPassword: {
    from: env('MAIL_FROM', `no-reply@${name}.io`),
    replyTo: env('MAIL_TO', `no-reply@${name}.io`),
    emailTemplate: { subject: `Reset password`, html: forgotPasswordTemplate, text: forgotPasswordTemplate },
  },
})
