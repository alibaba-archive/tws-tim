'use srtict'

const utils = require('../utils')

describe('Room.create', () => {
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
  })
})
