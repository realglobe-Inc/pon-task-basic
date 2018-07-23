/**
 * Test case for install.
 * Runs with mocha.
 */
'use strict'

const install = require('../lib/install.js')
const ponContext = require('pon-context')
const assert = require('assert')

describe('install', function () {
  this.timeout(30000)

  before(async () => {

  })

  after(async () => {

  })

  it('Install', async () => {
    const ctx = ponContext()
    await install()(ctx)
  })
})

/* global describe, before, after, it */
