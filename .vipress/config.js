const { vue3 } = require('vipress-template-vue3')

module.exports = {
  // 标题
  title: 'vipress-doc',
  lang: 'zh-CN',
  icon: '/favicon.ico',
  // 首页路由地址
  homeRoute: '/README',
  plugin: [ vue3() ]
}
  