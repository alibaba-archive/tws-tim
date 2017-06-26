'use strict'

const utils = require('../utils')

describe('Activity.create', () => {
  let room
  let _resourceId
  let client = utils.httpClient

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
  })

  after(function * () {
    yield room.remove(utils.randomId())
  })

  it('should ok', function * () {
    yield client.Activity.create({
      _resourceId: _resourceId,
      action: 'comment',
      title: utils.randomStr()
    })
  })
})
