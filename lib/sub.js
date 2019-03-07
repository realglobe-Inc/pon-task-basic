/**
 * define sub task
 * @function sub
 * @param {string} ponfile
 * @returns {function}
 */
'use strict'

const path = require('path')
const { spawn } = require('pon-task-command')

/** @lends sub */
function sub(dirname) {
  return function define(taskName) {
    return async function subTask(ctx) {
      const cwd = process.cwd()
      const relativeDirname = path.relative(cwd, dirname)
      process.chdir(dirname)
      const beforeMessage = `\n=== ${taskName}@${relativeDirname} ===\n`
      const afterMessage = `\n${new Array(beforeMessage.length - 2).fill('=').join('')}\n`
      try {
        ctx.logger.debug(beforeMessage)
        await spawn('npx', ['pon', taskName], {})(ctx)
        ctx.logger.debug(afterMessage)
      } finally {
        process.chdir(cwd)
      }
    }
  }
}

module.exports = sub
