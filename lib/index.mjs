/**
 * Basic task set for pon
 * @module pon-task-basic
 * @version 3.4.0
 */

'use strict'

import define from './define'

const lib = define.bind(this)

Object.assign(lib, define, {
  define
})

const { mocha, fs, command, coz, fmtjson, env, task, open, pondoc,  } = define

export default lib
export {
  mocha,
  fs,
  command,
  coz,
  fmtjson,
  env,
  task,
  open,
  pondoc,
}