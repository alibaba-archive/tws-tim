'use strict'

const httpclient = require('./http-client')

class Notification {
  constructor (_userId) {
    this._userId = _userId
  }

  list (body = {}) {
    httpclient.request.get({
      uri: `/v1/users/${this._userId}/notifications`,
      body: {
        sort: body.sort,
        offset: body.offset,
        limit: body.limit
      }
    })
  }
}

module.exports = Notification
