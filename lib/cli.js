/**
 * Created by Windom on 2017/4/5.
 */
const process = require('process')

const program = require('commander')

const pkg = require('../package.json')

let noArgs = true

program
  .version(pkg.version)
  .usage('today [options] <place>')
  .description('show the weather today in the place')


program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
