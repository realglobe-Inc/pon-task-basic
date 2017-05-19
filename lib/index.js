/**
 * Basic task set for pon
 * @module pon-task-basic
 * @version 2.0.3
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
