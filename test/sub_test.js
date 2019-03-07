/**
 * Test case for sub.
 * Runs with mocha.
 */
'use strict'

const sub = require('../lib/sub.js')
const assert = require('assert')
const ponContext = require('pon-context')

describe('sub', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Sub', async () => {
    const define = sub(`${__dirname}/../misc/mocks/mock-project01`)
    const hey = define('hey')
    const ctx = ponContext()
    await hey(ctx)
  })
})

/* global describe, before, after, it */
