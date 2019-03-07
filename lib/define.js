/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @param {Array} [options.mocha] - Args for pon-task-mocha
 * @param {Array} [options.fmtjson] - Args for pon-fmtjson-task
 * @param {Array} [options.command] - Args for pon-command-task
 * @param {Array} [options.env] - Args for pon-env-task
 * @param {Array} [options.task] - Args for pon-task-task
 * @returns {function} Defined task
 */
'use strict'

const command = require('pon-task-command')
const task = require('pon-task-task')
const fs = require('pon-task-fs')
const coz = require('pon-task-coz')
const env = require('pon-task-env')
const cron = require('./cron')
const install = require('./install')
const sub = require('./sub')
const open = require('pon-task-open')

const subPacks = {
  fs,
  command,
  coz,
  env,
  task,
  open,
  install,
  cron,
  sub,
}

/** @lends define */
function define (options = {}) {
  const subTasks = Object
    .keys(options)
    .reduce((subTasks, name) => Object.assign(subTasks, {
      [name]: subPacks[name](...(options[name] || []))
    }), {})

  function task (ctx) {
    return Promise.all([
      Object.keys(subTasks).map((name) => subTasks[name](ctx))
    ])
  }

  return Object.assign(task, subTasks)
}

module.exports = Object.assign(define, subPacks, {subPacks})


