// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var parameter = require('../build/parameter.js')
var param = parameter.parameter;
if (param == 'qa') {
    console.log('build qa environment');
    // qa
    module.exports = {
        build: {
            env: require('./qa.env'),
            index: path.resolve(__dirname, '../dist/index.html'),
            assetsRoot: path.resolve(__dirname, '../dist'),
            assetsSubDirectory: 'static',
            assetsPublicPath: './',
            productionSourceMap: true,
            productionGzip: false,
            productionGzipExtensions: ['js', 'css'],
            bundleAnalyzerReport: process.env.npm_config_report
        },
        dev: {
            env: require('./dev.env'),
            port: 8080,
            autoOpenBrowser: true,
            assetsSubDirectory: 'static',
            assetsPublicPath: '/',
            proxyTable: {
                '/api': {
                    target: 'http://dev.wechat.d1m.cn',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': '/'
                    }
                }
            },
            cssSourceMap: false
        }
    }
} else {
    console.log('prod environment');
    // prod
    module.exports = {
        build: {
            env: require('./prod.env'),
            index: path.resolve(__dirname, '../dist/index.html'),
            assetsRoot: path.resolve(__dirname, '../dist'),
            assetsSubDirectory: 'static',
            assetsPublicPath: './',
            productionSourceMap: true,
            productionGzip: false,
            productionGzipExtensions: ['js', 'css'],
            bundleAnalyzerReport: process.env.npm_config_report
        },
        dev: {
            env: require('./dev.env'),
            port: 8080,
            autoOpenBrowser: true,
            assetsSubDirectory: 'static',
            assetsPublicPath: '/',
            proxyTable: {
                '/api': {
                    target: 'http://dev.wechat.d1m.cn',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': '/'
                    }
                }
            },
            cssSourceMap: false
        }
    }
}
