'use strict'

const utils = require('../utils')

describe('Notification.markAllRead', () => {
  it('should ok', function * () {
    let client = utils.httpClient
    yield client.Notification.markAllRead()
  })
})
