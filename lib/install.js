/**
 * pon task to install package
 * @function install
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const findup = require('findup')
const needsPkgInstall = require('needs-pkg-install')
const {spawn: {npm}} = require('pon-task-command')

/** @lends install */
function install (options = {}) {
  return async function tax (ctx) {
    const {logger} = ctx
    const cwd = process.cwd()

    const dirname = await new Promise((resolve, reject) =>
      findup(cwd, 'package.json', (err, dirname) => {
        err ? reject(err) : resolve(dirname)
      })
    )
    if (!dirname) {
      throw new Error(`[install] \`package.json\` not found in ${cwd}`)
    }
    const needs = await needsPkgInstall(dirname)
    if (!needs) {
      logger.debug('[install] No need to install package')
      return
    }
    return await npm('install', '--ignore-scripts --no-save')(ctx)
  }
}

module.exports = install