'use strict'

const assert = require('power-assert')
const utils = require('../utils')

describe('activity.retrieve', () => {
  let _activityId
  let client = utils.httpClient

  before(function * () {
    let _resourceId = utils.randomId()

    yield client.Room.create({
      _resourceId: _resourceId,
      resourceType: 'project',
      members: [
        client.getUserId()
      ]
    })

    let res = yield client.Activity.createGroup(_resourceId, {
      action: 'comment',
      title: utils.randomStr()
    })
    _activityId = res._id
  })

  it('should ok', function * () {
    let activity = new client.Activity(_activityId)

    let res = yield activity.retrieve()
    assert.equal(res.activity._createdBy, client.getUserId())
  })
})
