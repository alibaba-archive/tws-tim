'use strict'

const assert = require('power-assert')
const utils = require('../utils')

describe('Notification.list', () => {
  it('should ok', function * () {
    let client = utils.httpClient
    let res = yield client.Notification.list()
    assert.equal(res.notifications.length, 0)
  })
})
