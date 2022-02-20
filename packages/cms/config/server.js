const tasks = require('./cron')

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: { autoOpen: false },
  cron: {
    enabled: false,
    tasks,
  },
})
