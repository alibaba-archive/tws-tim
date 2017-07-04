'use strict'

const assert = require('power-assert')
const utils = require('../utils')

describe('Activity.list', () => {
  let client = utils.httpClient
  let _resourceId

  before(function * () {
    _resourceId = utils.randomId()

    yield client.Room.create({
      _resourceId: _resourceId,
      resourceType: 'project',
      members: [
        client.getUserId()
      ]
    })

    yield client.Activity.createGroup(_resourceId, {
      action: 'comment',
      title: utils.randomStr()
    })
  })

  it('should ok', function * () {
    let res = yield client.Activity.list({
      _resourceId: _resourceId
    })
    assert.equal(res.activities.length, 1)
  })
})
