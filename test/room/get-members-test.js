'use srtict'

const assert = require('power-assert')
const utils = require('../utils')

describe('room.getMembers', () => {
  let room
  let members = [
    utils.randomId(),
    utils.randomId()
  ]

  before(function * () {
    let _resourceId = utils.randomId()
    let client = utils.httpClient

    yield client.Room.create({
      _resourceId: _resourceId,
      resourceType: 'project',
      members: members
    })

    room = new client.Room(_resourceId)
  })

  after(function * () {
    yield room.remove(utils.randomId())
  })

  it('should ok', function * () {
    let result = yield room.getMembers()
    assert.equal(result.count, members.length)
    let checksum = utils.checksumMembers(result.members)
    assert.equal(result.checksum, checksum)
    assert.equal(result.count, members.length)
    assert.deepEqual(result.members, members.sort())
  })
})
