var path = require('path')

module.exports = {
  postHook: function(webpackConf, options){
    webpackConf.resolve.alias = Object.assign(webpackConf.resolve.alias || {}, {
      '@qapp-ui': path.join(process.cwd(), 'components')
    })
  }
}
