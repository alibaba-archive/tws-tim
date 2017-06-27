'use srtict'

const utils = require('../utils')

describe('Room.create', () => {
  let room

  after(function * () {
    yield room.remove()
  })

  it('should ok', function * () {
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
})
