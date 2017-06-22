'use strict'

module.exports = {
  configure: function (options) {
    require('./lib/http-client').configure(options)
  },
  Room: require('./lib/room')
}
