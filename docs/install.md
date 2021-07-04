# 开始

> **兼容性注意**
>
> vipress 需要 Node.js 版本 >= 12.0.0。

## 修改 NPM 源

可以通过添加 **.npmrc** 文件，自定义项目的源地址。

```sh
registry=http://npm.qixin007.com
```

## 安装 vipress 依赖

使用 NPM:
```sh
npm i @intsig/vipress vipress-template-vue3
```

使用 Yarn:  
```sh
yarn add @intsig/vipress vipress-template-vue3
```

目前支持的模板有：

- [vipress-template-vue3]() vue3 模板

## 添加快捷指令

在 package.json 中添加如下命令，`-p` 用于指定启动的服务端口。

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
  "scripts": {
    "dev": "vipress -p 9000"
  },
  "license": "MIT",
  "dependencies": {
    "@intsig/vipress": "^0.8.0",
    "vipress-template-vue3": "^0.1.0"
  }
}
```

## 运行

```sh
npm run dev
```

使用如上命令就可以启动文档服务了，默认进入欢迎页面。

## 打包

在 package.json 中添加如下命令

```diff
   "scripts": {
+    "dev": "vipress -p 9000",
+    "build: "vipress build"
   }
```

运行打包功能 **`npm run build`**

### 测试打包

将打包生成后的 **dist** 目录复制到你的静态服务器根目录下。

下面我们用 docker 来运行一个 nginx 服务器，然后将打包后的内容放到 html 目录中测试。

docker-compose.yaml 文件配制如下:

```sh
version: '3.4'

services:
  vipressbuild:
    restart: always
    image: nginx:latest
    container_name: "nginx"
    ports:
      - "8000:80"
    environment:
      - NGINX_PORT=80
    volumes:
      - ./conf.d:/etc/nginx/conf.d
      - ./html:/usr/share/nginx/html
```

conf.d/default.conf 配制如下:
```sh
server {
    listen       80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html/;
        index  index.html index.htm;
        # history mode
        try_files $uri $uri/ /index.html;
    }
}
```

复制完内容后，通过 [localhost:8000](http://localhost:8000/) 访问我们的打包文档就可以了。