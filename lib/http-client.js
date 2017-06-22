'use strict'

const request = require('request-promise')
const Room = require('./room')

class HTTPClient {
  constructor (options = {}) {
    if (!options.access_token) {
      throw new Error('options.access_token required')
    }

    this._request = request.defaults({
      baseUrl: options.host || 'https://tim.teambition.net',
      timeout: options.timeout || 5000,
      gzip: options.gzip || true,
      headers: {
        Authorization: `Bearer ${options.access_token}`
      },
      json: true,
      encoding: 'utf-8'
    })

    let self = this
    let requestMixin = (Base) => class extends Base {
      static get request () {
        return self._request
      }
      get request () {
        return self._request
      }
    }
    this.Room = requestMixin(Room)
  }
}

module.exports = HTTPClient
