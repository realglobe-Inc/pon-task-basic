/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @param {Array} [options.mocha] - Args for pon-task-mocha
 * @returns {function} Defined task
 */
'use strict'

const mocha = require('pon-task-mocha')
const fmtjson = require('pon-task-fmtjson')
const command = require('pon-task-command')
const fs = require('pon-task-fs')
const coz = require('pon-task-coz')
const env = require('pon-task-env')

const subPacks = { mocha, fs, command, coz, fmtjson, env }

/** @lends define */
function define (options = {}) {
  let subTasks = Object
    .keys(subPacks)
    .reduce((subTasks, name) => Object.assign(subTasks, {
      [name]: subPacks[ name ](...(options[ name ] || []))
    }), {})

  function task (ctx) {
    return Promise.all([
      Object.keys(subTasks).map((name) => subTasks[ name ](ctx))
    ])
  }

  return Object.assign(task, subTasks)
}

module.exports = Object.assign(define, subPacks)


