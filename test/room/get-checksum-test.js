'use srtict'

const assert = require('power-assert')
const Combinatorics = require('js-combinatorics')
const utils = require('../utils')

describe('Room.checksum', () => {
  it('should ok if empty', () => {
    let client = utils.httpClient
    let checksum = client.Room.checksum([])
    assert.equal(checksum, '000000000000000000000000')
  })

  it('should ok', () => {
    let expected = '9b37ed5a4713f0ec4f62be2c'

    let members = [
      'a48a11a3557eeaf7018b2846',
      '6342d658ae2d443d995715d9',
      '5cff2aa1bc405e26d7be83b3'
    ]

    let client = utils.httpClient

    let count = 0
    Combinatorics.permutation(members).toArray().forEach((ms) => {
      count++
      let checksum = client.Room.checksum(members)
      assert.equal(checksum, expected)
    })
    assert.equal(count, 6)
  })
})
