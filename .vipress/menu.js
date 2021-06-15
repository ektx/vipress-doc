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
        label: '欢迎',
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
  }
]
  