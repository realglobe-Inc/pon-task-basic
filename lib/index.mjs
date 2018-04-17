/**
 * Basic task set for pon
 * @module pon-task-basic
 * @version 4.0.2
 */

'use strict'

import define from './define'

const lib = define.bind(this)

Object.assign(lib, define, {
  define
})

const { fs, command, coz, env, task, open,  } = define

export default lib
export {
  fs,
  command,
  coz,
  env,
  task,
  open,
}