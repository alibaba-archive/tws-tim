'use srtict'

const assert = require('power-assert')
const utils = require('../utils')

describe('room.updateMembers', () => {
  let room
  let members

  beforeEach(function * () {
    let _resourceId = utils.randomId()
    let client = utils.httpClient

    members = [
      utils.randomId(),
      utils.randomId()
    ]

    yield client.Room.create({
      _resourceId: _resourceId,
      resourceType: 'project',
      members: members
    })

    room = new client.Room(_resourceId)
  })

  it('replace should ok', function * () {
    let result

    let replacedmembers = [
      utils.randomId(),
      utils.randomId()
    ]
    let expected = replacedmembers
    result = (yield room.replaceMembers(replacedmembers)).active
    assert.equal(result.count, replacedmembers.length)
    assert.equal(result.checksum, utils.checksumMembers(expected))
  })

  it('add should ok', function * () {
    let result

    let addedmembers = [
      utils.randomId(),
      utils.randomId()
    ]
    let expected = addedmembers.concat(members)
    result = (yield room.addMembers(addedmembers)).active
    assert.equal(result.count, expected.length)
    assert.equal(result.checksum, utils.checksumMembers(expected))
  })

  it('delete should ok', function * () {
    let result

    let deletemembers = [
      members[0],
      utils.randomId()
    ]
    let expected = members.filter(ele => !deletemembers.includes(ele))
    result = (yield room.deleteMembers(deletemembers)).active
    assert.equal(result.count, expected.length)
    assert.equal(result.checksum, utils.checksumMembers(expected))
  })
})
