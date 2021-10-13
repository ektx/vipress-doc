/**
 * 菜单格式默认为以下
 */
interface Menu {
  label: string,
  to?: string,
  children?: Menu[]
}

export const menu: Menu[] = [
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
        label: 'Markdown',
        to: '/docs/doc'
      },
      {
        label: '扩展',
        to: '/docs/expand'
      }
    ]
  }
]
  