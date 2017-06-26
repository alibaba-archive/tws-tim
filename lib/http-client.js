'use strict'

const request = require('request-promise')
const Room = require('./room')
const Notification = require('./notification')
const Activity = require('./Activity')

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
    let requestAndUserIdMixin = (Base) => class extends Base {
      static get request () {
        return self._request
      }
      get request () {
        return self._request
      }

      static get _userId () {
        return self.getUserId()
      }

      get _userId () {
        return self.getUserId()
      }
    }
    this.Room = requestAndUserIdMixin(Room)
    this.Notification = requestAndUserIdMixin(Notification)
    this.Activity = requestAndUserIdMixin(Activity)
  }

  setUserId (_userId) {
    this._userId = _userId
    return this.getUserId()
  }

  getUserId () {
    return this._userId
  }
}

module.exports = HTTPClient
