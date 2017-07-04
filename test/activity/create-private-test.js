'use strict'

const utils = require('../utils')

describe('Activity.createPrivate', () => {
  let _targetId
  let client = utils.httpClient

  before(function * () {
    _targetId = utils.randomId()
  })

  it('should ok', function * () {
    yield client.Activity.createPrivate(_targetId, {
      action: 'comment',
      title: utils.randomStr()
    })
  })
})
