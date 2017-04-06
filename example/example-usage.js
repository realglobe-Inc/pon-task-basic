'use strict'

const pon = require('pon')
const { mocha, fs } = require('pon-task-basic')
const { mkdir } = fs

async function tryExample () {
  let run = pon({
    'fs:mkdir': mkdir([ 'lib', 'test', 'tmp' ]),
    'test:mocha': mocha('test/*_test.js')
  })

  run('test:*')
}

tryExample()
