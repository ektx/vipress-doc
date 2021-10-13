import vuePlugin from '@vitejs/plugin-vue'

export default {
  // 标题
  title: 'vipress-doc',
  lang: 'zh-CN',
  icon: '/favicon.ico',
  template: 'vue3',
  // 首页路由地址
  homeRoute: '/readme',
  plugins: [ vuePlugin() ]
}
  