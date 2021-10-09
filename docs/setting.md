# 设置

首先我们了解一下 vipress 在启动后，默认在项目中生成的目录结构。

```
---- project            # 项目根目录
  ├──── /.vipress       # 生成的环境目录
  │  ├──── /md-pages    # markdown 文件转化目录(不用提交)
  │  ├──── /src         # VUE 模板目录
  │  ├──── server.js    # 服务端配制文件
  │  └──── client.js    # 客户端配制文件
  │  
  ├──── public          # 静态文件地址
  ├──── package.json    # 项目的清单
  ├──── .gitignore      # 忽略文件
  └──── ...             # 其它你自己的文件内容
```

## Vipress 配制命令

- p `number` 端口号
- c `boolean` 验证控制

package.json 示例：

```js
{
  ...
  "scripts": {
    // 在 9000 端口启动服务并对 MD 文件的完整性验证
    "dev": "vipress -p 9000 -c"
  },
  ...
}
```

## 共享配置

完整的配制效果如下：

```js
...
module.exports = {
  title: 'PROJECT_NAME',      // 标题
  lang: 'zh-CN',              // 网页语言
  icon: '/favicon.ico',       // icon
  template: 'vue3',           // 渲染模板
  homeRoute: '',              // 首页路由地址
  server: {
    port: 12345,              // 默认端口
    strictPort: false,        // 支持端口占用时自动调整
  },
  build: {                    // 打包设置
    doc: {                    // 打包文档
      base: '/',              // 
      outDir: 'dist'          // 打包输出目录
    },
    lib: {                    // 打包组件
      entry: 'packages',      // 组件目录
      outDir: 'lib'           // 组件生成目录
    }
  },
  plugins: [ vuePlugin() ]    // 使用的模板信息
}
```

介绍 **.vipress/congif.js** 中的参数功能与修改。

> 配制修改后，需要重启服务生效。
### title 

- 类型 `String`

标题配制；服务在启动时，默认使用文件夹为标题。

```js
title: 'PROJECT_NAME',
```

### lang

- 类型 `String`
- 默认 `zh-CN`

网页的语言，通常你并不需要配制此项。

### icon

- 类型 `Path`
- 默认 `/favicon.ico`

指定网站的图标，你可以将它设置为一个网络地址或是 public 目录下的内容。

### template

- 类型 `String`

使用的模板，只读，不可修改。


### homeRoute

- 类型 `String`

指定默认的首页。

```js
// 使用 docs/setting.md 为首页
homeRoute: '/docs/setting'
```

## 服务器配置

#### server.port

- 类型 `Number`
- 默认 `12345`

  指定开发服务器端口。注意：如果端口已经被使用，服务会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。

#### server.strictPort

- 类型 `boolean`
- 默认 `false`

  设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。


## 打包设置

打包设置。

### 文档打包设置

#### build.doc.base

- 类型 `String`
- 默认 `/`

  开发或生产环境服务的公共基础路径。合法的值包括以下几种：
  - 绝对 URL 路径名，例如 `/foo/`
  - 完整的 URL，例如 `https://foo.com/`
  - 空字符串或 `./`（用于开发环境）

#### build.doc.outDir

- 类型 `String`
- 默认 `dist`

  指定输出目录，默认 dist 目录(相对于项目根目录)。  

### 组件库打包设置

#### build.lib.entry

- 类型 `String`
- 默认 `packages`

指定打包的入口目录（相对于项目根目录）。

#### build.lib.outDir

- 类型 `String`
- 默认 `lib`

指定输出目录，默认 lib 目录(相对于项目根目录)。


### plugin

- 类型 `(Plugin | Plugin[])[]`

插件使用，接受插件方法。具体可以参考 [vite 插件](https://vitejs.bootcss.com/guide/api-plugin.html)。


## 系统默认服务

此项返回的是项目的基础信息。

### project.root

- 类型 `String`
- 只读

返回当前项目根目录绝对位置。

### project.serverDir

- 类型 `String`
- 只读

返回当前项目中 **.vipress** 的绝对位置。

### project.mdPagesDir

- 类型 `String`
- 只读

返回当前项目所有 markdown 解析后生成的 vue 文件的绝对位置。

### project.srcDir

- 类型 `String`
- 只读

返回当前项目 **.vipress/src** 目录的绝对位置。

### project.publicDir

- 类型 `String`
- 只读

返回当前项目的 **publuc** 目录绝对位置。

### project.configPath

- 类型 `String`
- 只读

返回当前项目的配制文件所在有绝对路径。


## 目录设置

文件位置: **.vipress/client.js**

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
