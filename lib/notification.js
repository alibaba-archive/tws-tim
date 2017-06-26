'use strict'

class Notification {
  static list (options = {}) {
    return this.request.get({
      uri: `/v1/users/${this._userId}/notifications`,
      qs: options
    })
  }

  static removeAll () {
    return this.request.delete({
      uri: `/v1/users/${this._userId}/notifications`
    })
  }

  static markAllRead () {
    return this.request.put({
      uri: `/v1/users/${this._userId}/notifications:read`
    })
  }

  static getUnreadCount () {
    return this.request.get({
      uri: `/v1/users/${this._userId}/notifications:getUnreadCount`
    })
  }

  constructor (_notificationId) {
    this._notificationId = _notificationId
  }

  retrieve () {
    return this.request.get({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`
    })
  }

  remove () {
    return this.request.delete({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`
    })
  }

  mute () {
    this.request.put({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`,
      body: {
        action: 'mute'
      }
    })
  }

  unmute () {
    return this.request.put({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`,
      body: {
        action: 'unmute'
      }
    })
  }

  read () {
    return this.request.put({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`,
      body: {
        action: 'read'
      }
    })
  }

  unread () {
    return this.request.put({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`,
      body: {
        action: 'unread'
      }
    })
  }

  setReminder (reminder) {
    return this.request.put({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`,
      body: {
        action: 'setReminder',
        reminderUnix: reminder
      }
    })
  }

  unsetReminder () {
    return this.request.put({
      uri: `/v1/users/${this._userId}/notifications/${this._notificationId}`,
      body: {
        action: 'unsetReminder'
      }
    })
  }
}

module.exports = Notification
