/**
 * 菜单格式默认为以下
 * interface menu {
 *   label: string,
 *   to?: string,
 *   children?: menu[]
 * }
 */
export default [
  {
    label: '欢迎',
    children: [
      {
        label: '简介',
        to: '/'
      },
      {
        label: '安装与使用',
        to: '/docs/install'
      },
      {
        label: '设置',
        to: '/docs/setting'
      }
    ]
  },
  {
    label: '功能',
    children: [
      {
        label: '文档',
        to: '/docs/doc'
      },
      {
        label: '扩展',
        to: '/docs/expand'
      }
    ]
  }
]
  