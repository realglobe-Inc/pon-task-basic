/**
 * Pon task to define cron
 * @function cron
 * @param {string} when - Cron time
 * @param {string|function} task - Task to run
 * @param {Object} [options={}] - Command
 * @returns {function} Defined task
 */
'use strict'

const {CronJob} = require('cron')
const task = require('pon-task-task')
const {spawn} = require('pon-task-command')

/** @lends cron */
function cron (when, run, options = {}) {
  return function task (ctx) {
    const {logger} = ctx
    if (typeof run === 'string') {
      run = spawn(run)
    }
    const {
      onComplete = null,
      timeZone,
    } = options
    const taskWrap = async () => {
      logger.info(`A crone tick started (${new Date().toLocaleString()})`)
      await task(ctx)
      logger.info(`...tick finished (${new Date().toLocaleString()})`)
    }
    const job = new CronJob(when, taskWrap, onComplete, true, timeZone)
    const stop = () => job.stop()
    return Object.assign(stop, {
      job,
    })
  }
}

cron.pon = function cornPonTask (when, taskName, options = {}) {
  return cron(when, task.pon(taskName), options)
}

module.exports = cron
