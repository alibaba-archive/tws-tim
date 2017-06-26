'use strict'

const assert = require('power-assert')
const HttpClient = require('../../lib/http-client')

describe('HttpClient.constructor', () => {
  it('should throw if access_token missed', () => {
    assert.throws(function () {
      return new HttpClient()
    })
  })

  it('should ok', () => {
    return new HttpClient({
      access_token: 'your token'
    })
  })

  it('should use custom host/timeout/gzip', () => {
    return new HttpClient({
      access_token: 'your token',
      host: 'http://example.com',
      gzip: false,
      timeout: 1000
    })
  })
})
