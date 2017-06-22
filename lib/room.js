'use strict'

class Room {
  static create (payload) {
    return this.request.post({
      uri: '/v1/rooms',
      body: payload
    })
  }

  constructor (_resourceId) {
    this._resourceId = _resourceId
  }

  getMembers () {
    return this.request.get({
      uri: `/v1/resources/${this._resourceId}/members`
    })
  }

  replaceMembers (members) {
    return this.request.put({
      uri: `/v1/resources/${this._resourceId}/members`,
      body: {
        action: 'replace',
        members: members
      }
    })
  }

  addMembers (members) {
    return this.request.put({
      uri: `/v1/resources/${this._resourceId}/members`,
      body: {
        action: 'append',
        members: members
      }
    })
  }

  deleteMembers (members) {
    return this.request.put({
      uri: `/v1/resources/${this._resourceId}/members`,
      body: {
        action: 'delete',
        members: members
      }
    })
  }

  remove (_deletedBy) {
    return this.request.del({
      uri: `/v1/resources/${this._resourceId}`,
      body: {
        _deletedBy: _deletedBy
      }
    })
  }

  archive (_archivedBy) {
    return this.request.put({
      uri: `/v1/resources/${this._resourceId}:archive`,
      body: {
        _archivedBy: _archivedBy
      }
    })
  }

  unarchive () {
    return this.request.put({
      uri: `/v1/resources/${this._resourceId}:unarchive`
    })
  }
}

module.exports = Room
