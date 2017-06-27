'use strict'

const utils = require('../utils')

describe('activity.update', () => {
  let client = utils.httpClient
  let room
  let _activityId

  before(function * () {
    let _resourceId = utils.randomId()

    yield client.Room.create({
      _resourceId: _resourceId,
      resourceType: 'project',
      members: [
        client.getUserId()
      ]
    })

    room = new client.Room(_resourceId)

    let res = yield client.Activity.create({
      _resourceId: _resourceId,
      action: 'comment',
      title: utils.randomStr()
    })
    _activityId = res._id
  })

  after(function * () {
    yield room.remove()
  })

  it('should ok', function * () {
    let activity = new client.Activity(_activityId)

    yield activity.update({
      title: utils.randomStr(),
      action: utils.randomStr()
    })
  })
})
