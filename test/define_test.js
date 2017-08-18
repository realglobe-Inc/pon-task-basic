/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const ponContext = require('pon-context')
const {ok} = require('assert')

describe('define', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Define', async () => {
    let ctx = ponContext()
    let task = define({
      mocha: [`${__dirname}/../misc/mocks/*-test.js`, {}],
      command: ['ls', ['-la']],
      coz: ['.*.bud'],
      fmtjson: ['*.json'],
      env: [process.env.NODE_ENV]
    })
    ok(task)

    await Promise.resolve(task(ctx))
  })
})

/* global describe, before, after, it */
