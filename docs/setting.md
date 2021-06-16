# 设置

首先我们了解一下 vipress 在启动后，默认在项目中生成的目录结构。

```
---- project            # 项目根目录
  ├──── /.vipress       # 生成的环境目录（自动生成）
  │  ├──── /md-pages    # markdown 文件转化目录
  │  ├──── /src         # 模板目录
  │  ├──── .gitignore   # 忽略文件
  │  ├──── config.js    # 项目配制文件
  │  └──── menu.js      # 菜单配制文件
  │  
  ├──── public          # 静态文件地址（自建）
  ├──── package.json    # 依赖包
  └──── ...             # 其它你自己的文件内容
```

## 配制服务端口

服务的端口设置可以在 package.json 的脚本命令处设置，如设置启动的端口为 9000。默认端口为 12345

```json
{
  ...
  "scripts": {
    "dev": "vipress -p 9000"
  },
  ...
}
```

## 页面功能配制

介绍 **.vipress/congif.js** 中的参数功能与修改。
### title 

- type `String`

标题配制；服务在启动时，默认使用文件夹为标题。

```js
title: 'vipress-doc',
```

### lang

- type `String`

网页的语言，通常你并不需要配制此项。

```js
// 默认
lang: 'zh-CN'
```

### icon

- type `Path`

指定网站的图标，你可以将它设置为一个网络地址或是 public 目录下的内容。

### homeRoute

- type `String`

指定默认的首页。

```js
// 使用 docs/setting.md 为首页
homeRoute: '/docs/setting'
```

## 目录设置

文件位置: **.vipress/menu.js**

文档创建之后，并不会自动在目录上显示，需要手动添加到目录中。

格式如下：

```ts
interface menu {
  label: string,
  to?: string,
  children?: menu[]
}
```

> to 与 children 只能 2 选 1。