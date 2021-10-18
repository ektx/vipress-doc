// const vuePlugin = require('@vitejs/plugin-vue')

// module.exports = {
//   // 标题
  // title: 'vipress-doc',
  // lang: 'zh-CN',
  // icon: '/favicon.ico',
  // template: 'vue3',
  // // 首页路由地址
  // homeRoute: '/readme',
  // plugins: [ vuePlugin({
  //   include: /vue3?$/i
  // }) ]
// }
  
import vue from '@vitejs/plugin-vue'

export default {
  title: 'vipress-doc',
  lang: 'zh-CN',
  icon: '/favicon.ico',
  template: 'vue3',
  // 首页路由地址
  homeRoute: '/readme',
  plugins: [ vue() ]
}