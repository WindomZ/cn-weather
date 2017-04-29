#!/usr/bin/env node
/**
 * Created by WindomZ on 2017/4/29.
 */
'use strict'

const process = require('process')

const program = require('commander')

const pkg = require('../package.json')

let noArgs = true

program
  .version(pkg.version)
  .description('show chinese weather')

program
  .command('today <place>')
  .description('show the weather today in the place')
  .action((place, options) => {
    noArgs = false
    console.log('place: ' + place)
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
