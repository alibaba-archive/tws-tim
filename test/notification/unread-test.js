'use strict'

const utils = require('../utils')

describe('notification.unread', () => {
  let client = utils.httpClient
  let _notificationId

  before(function * () {
    let _resourceId = utils.randomId()

    yield client.Room.create({
      _resourceId: _resourceId,
      resourceType: 'project',
      members: [
        client.getUserId()
      ]
    })

    let res = yield client.Activity.create({
      _resourceId: _resourceId,
      title: utils.randomStr(),
      action: utils.randomStr()
    })
    _notificationId = res.notifications[0]._id
  })

  it('should ok', function * () {
    let notification = new client.Notification(_notificationId)
    yield notification.unread()
  })
})
