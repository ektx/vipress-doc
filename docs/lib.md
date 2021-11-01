
# 创建第一个组件库文档

这里我们以创建一个 vue3 的大屏组件库为例。

## 创建项目目录

```bash
npm init vipress@latest my-app

# 如果提示如下，输入 y 确认并继续
Need to install the following packages:
  create-vipress@latest
Ok to proceed? (y)
```

然后选择 vue3 的模板，当终端显示如下时，则项目已经生成好了。

```bash
✨ Done. Now run:

  cd my-app
  npm i
  npm run dev
```

按照提示，输入，进入项目，安装依赖后，就可以运行文档程序了。

进入项目，你可以看到 package.json 中已经添加有以下几条命令：

```js
  "scripts": {
    "dev": "vipress",
    "build": "vipress build"
  },
```

- dev 用于文档开发
- build 用于打包生成

> 在已经存在的项目中，你可以运行 `npm init vipress@latest -- --init` 进行项目的初始化。

## 运行项目

```sh
# 进入项目目录
npm run init

# 安装依赖
npm i

# 运行服务
npm run dev
```

出现下方提示时，表示服务已经启动成功了🎉。

![](/succeed.png)

> 小提示
> 多数终端都可以点击连接直接访问。

浏览器效果如下：

![](/welcomePage.png)  

## 添加项目文档

服务启动好了，现在，我们添加一面页面吧。

在 my-app 的根目录下，我们添加一个 README.md 并让它成为首次进入的主页。

> 以下操作，请确保你在服务启动下，如果没有请先运行 `npm run dev` 启动服务。

### 1、创建 README.md

创建完成之后，其目录结构大致如下：

![add readme](/example/readme.png)

我们再输入些内容，比如下方内容

```md
# hello World

**this is test!**
```

### 2、添加目录

文件添加之后，我们发现页面上并没有更新菜单，这是因为菜单是需要手动配制的。

我们找到 **.vipress > client.js** 文件，进行如下修改。

```diff
export const menu = [
  {
    label: '欢迎',
    children: [
      {
-       label: 'Welcome',
+       label: '主页',
-       to: '/'
+       to: '/README'
      }
    ]
  }
]
```

> 这里要注意的是，to 中使用的地址就是相对于你项目根目录的地址。  
> README.md 是在 my-app 的根目录下生成的，所以这里地址就是 `/README`  
> 不用添加 .md 后缀的。

此时，你会发现，页面已经刷新了，菜单已经有了 主页 这个选项了，点击它，就可以来到我们创建的 readme 文档的页面了。

![new home](/example/newHome.png)  

### 3、修改默认首页

最后，我们修改下默认的首页地址。我们打开 `.vipress > server.js`，将 homeRoute 取消注释，并填写为 `/README`，**启动下服务**。

```diff
module.exports = {
  icon: '/favicon.ico',   // icon
  template: 'vue3',
- // homeRoute: '',       // 首页路由地址
+ homeRoute: '/README'
 ...
}
```

现在，当你访问页面时，默认页面就是这个 README.md 文档了。

## 打包文档

文档创建完成之后，我们需要打包文档，这里命令已经为你准备好了。

```sh
# 打包文档
npm run build
```

更新设置方法，可以参考 [设置](/docs/setting)