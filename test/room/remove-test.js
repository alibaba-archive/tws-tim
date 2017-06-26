'use srtict'

const utils = require('../utils')

describe('room.remove', () => {
  let room

  before(function * () {
    let _resourceId = utils.randomId()
    let client = utils.httpClient

    yield client.Room.create({
      _resourceId: _resourceId,
      resourceType: 'project',
      members: [
        utils.randomId()
      ]
    })

    room = new client.Room(_resourceId)
  })

  it('should ok', function * () {
    yield room.remove()
  })
})
