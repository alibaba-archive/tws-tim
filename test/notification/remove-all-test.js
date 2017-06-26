'use strict'

const utils = require('../utils')

describe('Notification.removeAll', () => {
  it('should ok', function * () {
    let client = utils.httpClient
    yield client.Notification.removeAll()
  })
})
