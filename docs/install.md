# 开始

> **兼容性注意**
>
> vipress 需要 Node.js 版本 >= 12.0.0。

## 安装

- 创建新项目

  用于创建项目文档。

  ```sh
  # npm 6.x
  npm init vipress@latest my-app

  # npm 7+
  npm init vipress@latest my-app

  # yarn
  yarn create vipress@latest my-app
  ```

  然后选择你需要的模板，支持的模板有：

  - vue3-ts
  - vue3 
  - vue2


## 运行与打包

```sh
# 运行服务
npm run dev

# 打包文档服务
npm run build
```

如果你在使用 vipress 来做为你的组件包工具时，你还可以通过以下方式来打包你的组件库，最终会在你的项目目录下生成一个 **lib** 的目录。

```sh
npm run build lib
```

## 更新模板

用于快速更新 **.vipress/src** 目录中文件。

```sh
# npm 6.x
npm init vipress@latest -update

# npm 7+
npm init vipress@latest -- --update
```

> ⚠ 更新后，会覆盖之前的文件，需要手动调整。

## 初始化项目

如果你在一个原有的项目中，希望添加 vipress 的功能，你可以运行以下方式来初始化项目（初始化项目并不会删除你的文件）

```sh 
npm init vipress@latest -- --init
```

## 验证文档

用于保持页面的显示效果为最新的内容。

```sh
# npm 6.x
npm dev -c

# npm 7+
npm dev -- -c
```

## 测试打包

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

复制完内容后，通过 **localhost:8000** 访问我们的打包文档就可以了。
