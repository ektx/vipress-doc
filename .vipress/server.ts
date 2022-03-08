// @ts-ignore
import vue from '@vitejs/plugin-vue'

export default {
  server: {
    port: 9000
  },
  title: 'vipress-doc',
  lang: 'zh-CN',
  icon: '/favicon.ico',
  template: 'vue3-ts',
  // 首页路由地址
  homeRoute: '/readme',
  plugins: [ vue() ]
}