/**
 * define sub task
 * @function sub
 * @param {string} ponfile
 * @returns {function}
 */
'use strict'

const path = require('path')
const ponRunner = require('pon-runner')

/** @lends sub */
function sub(ponfile) {
  return function define(taskName) {
    return async function subTask() {
      const cwd = process.cwd()
      const dirname = path.dirname(ponfile)
      const prefixer = ({ taskName }) => `[${taskName}@${path.relative(cwd, dirname)}]`
      const pon = ponRunner(require(ponfile), { prefixer })
      process.chdir(dirname)
      try {
        await pon.run(taskName)
      } finally {
        process.chdir(cwd)
      }
    }
  }
}

module.exports = sub
