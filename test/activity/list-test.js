'use strict'

const assert = require('power-assert')
const utils = require('../utils')

describe('Activity.list', () => {
  let client = utils.httpClient
  let room
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

    room = new client.Room(_resourceId)

    yield client.Activity.create({
      _resourceId: _resourceId,
      action: 'comment',
      title: utils.randomStr()
    })
  })

  after(function * () {
    yield room.remove()
  })

  it('should ok', function * () {
    let res = yield client.Activity.list({
      _resourceId: _resourceId
    })
    assert.equal(res.activities.length, 1)
  })
})
