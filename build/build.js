require('./check-versions')()

/** 参数说明
  @param: 获取参数数组中的第一个元素
  （1）prod: 对应打包production环境
  （2）qa: 对应打包qa环境
    * 若传入其他参数则 控制台返回提示
**/
var parameter = require('./parameter');
var args = process.argv.splice(2)
var param = args[0]
parameter.parameter = param;

if (param == 'qa') {
  process.env.NODE_ENV = 'production'
} else if (param == 'prod') {
  process.env.NODE_ENV = 'production'
} else {
  // if parameter is invalid -> return
  console.log('param is invalid, please use "npm run build prod/qa"')
  return
}
// if parameter is aq or pro -> run this code
var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
var spinner = ora('building for ' + parameter + '....')
spinner.start()
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})