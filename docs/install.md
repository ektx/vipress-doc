# 安装与使用

## 修改 NPM 源

可以通过添加 **.npmrc** 文件，自定义项目的源地址。

```sh
registry=http://npm.qixin007.com
```

## 安装 vipress 依赖

```sh
npm i @intsig/vipress
```

## 添加快捷指令

在 package.json 中添加如下命令，`-p` 用于指定启动的服务商品。

```json
{
  ...
  "scripts": {
    "dev": "vipress -p 9000"
  },
  ...
}
```

最后，完整的 package.json 类似如下:

```json
{
  "name": "vipress-doc",
  "version": "0.0.0",
  "description": "vipress 使用文档",
  "main": "index.js",
  "scripts": {
    "dev": "vipress -p 9000"
  },
  "repository": {
    "type": "git",
    "url": "http://git.qixin007.com/kgp/atlas/vipress-doc.git"
  },
  "keywords": [
    "vipress",
    "markdown",
    "vue"
  ],
  "author": "wenlong",
  "license": "MIT",
  "dependencies": {
    "@intsig/vipress": "^0.6.0"
  }
}
```

## 运行

```sh
npm run dev
```

使用如上命令就可以启动文档服务了，默认进入欢迎页面。下一节，将介绍如何配制我们的菜单与目录。