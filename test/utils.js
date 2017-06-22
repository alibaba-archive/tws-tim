'use strict'

const crypto = require('crypto')
const ObjectID = require('bson-objectid')
const HttpClient = require('../lib/http-client')

module.exports.httpClient = new HttpClient({
  host: 'http://192.168.0.21:31447',
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYWlkIjoiMjJiZmE2NWM1MDAzZDU4OWM4MWZiOTBkIiwiX29pZCI6IjM1NjI2NjYxMzYzNTYzMzUzMDMwMzM2NCIsImF0Ijo1MTIsImtpbmQiOiJhdXRoIiwicHMiOlsiYWxsKzYzIl0sInR5cGUiOiJ1c2VyIn0.VL3JJeS0H87yS8yPdlGUG4_C1tR4mfT7rGHNjdrJvpo'
})

module.exports.randomId = () => ObjectID().toHexString()

module.exports.checksumMembers = (members) => {
  members = members.map(m => m)
  members = members.sort()

  let md5 = crypto.createHash('md5')
  members.forEach(uid => md5.update(uid))
  return md5.digest('hex')
}
