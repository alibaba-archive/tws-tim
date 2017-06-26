'use strict'

const assert = require('power-assert')
const utils = require('../utils')

describe('Notification.getUnreadCount', () => {
  it('should ok', function * () {
    let client = utils.httpClient
    let res = yield client.Notification.getUnreadCount()
    assert.equal(res.count, 0)
  })
})
