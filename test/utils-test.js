'use strict'

const assert = require('power-assert')
const utils = require('./utils')

describe('utils.checksumMembers', () => {
  it('should ok', () => {
    let result = utils.checksumMembers(['66c118d87d634a1223c7ecbd', 'f05b167b93c7b4a1ea67d752'])
    assert.equal(result, '1a5a9d467030917e8501fff109775a2e')
  })

  it('should ok for reverse order', () => {
    let result = utils.checksumMembers(['f05b167b93c7b4a1ea67d752', '66c118d87d634a1223c7ecbd'])
    assert.equal(result, '1a5a9d467030917e8501fff109775a2e')
  })
})
