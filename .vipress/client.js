/**
 * 菜单格式默认为以下
 * interface menu {
 *   label: string,
 *   to?: string,
 *   children?: menu[]
 * }
 */
export const menu = [
  {
    label: '指引',
    children: [
      {
        label: '简介',
        to: '/readme'
      },
      {
        label: '开始',
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
  