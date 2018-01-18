/**
 * Basic task set for pon
 * @module pon-task-basic
 * @version 3.2.1
 */

'use strict'

import define from './define'

const lib = define.bind(this)

Object.assign(lib, define, {
  define
})

const { mocha, fs, command, coz, fmtjson, env, task, open,  } = define

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
}