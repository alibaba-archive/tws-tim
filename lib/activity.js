'use strict'

class Activity {
  static list (options = {}) {
    return this.request.get({
      uri: '/v1/chat/activities',
      qs: options
    })
  }

  static create (payload = {}) {
    payload._creatorId = this._userId

    return this.request.post({
      uri: '/v1/chat/activities',
      body: payload
    })
  }

  constructor (_activityId) {
    this._activityId = _activityId
    this.activity = null
  }

  retrieve () {
    return this.request.get({
      uri: `/v1/chat/activities/${this._activityId}`
    })
  }

  remove () {
    return this.request.delete({
      uri: `/v1/chat/activities/${this._activityId}`,
      body: {
        _deletedBy: this._userId
      }
    })
  }

  update (payload = {}) {
    payload._updatorId = this._userId
    return this.request.put({
      uri: `/v1/chat/activities/${this._activityId}`,
      body: payload
    })
  }
}

module.exports = Activity
