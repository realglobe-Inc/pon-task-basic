/**
 * Test case for sub.
 * Runs with mocha.
 */
'use strict'

const sub = require('../lib/sub.js')
const assert = require('assert')

describe('sub', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Sub', async () => {
    const define = sub(`${__dirname}/../misc/mocks/mock-project01/Ponfile`)
    const hey = define('hey')
    await hey()
  })
})

/* global describe, before, after, it */
