'use strict'

const utils = require('../utils')

describe('Activity.createGroup', () => {
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
  })

  it('should ok', function * () {
    yield client.Activity.createGroup(_resourceId, {
      action: 'comment',
      title: utils.randomStr()
    })
  })
})
