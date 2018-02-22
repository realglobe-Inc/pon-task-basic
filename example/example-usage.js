'use strict'

const pon = require('pon')
const {fs} = require('pon-task-basic')
const {mkdir} = fs

async function tryExample () {
  const run = pon({
    'fs:mkdir': mkdir(['lib', 'test', 'tmp']),
  })

  run('test:*')
}

tryExample()
