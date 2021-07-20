# 开始

> **兼容性注意**
>
> vipress 需要 Node.js 版本 >= 12.0.0。

## 安装

用于协助项目文档生成。

```sh
# npm 6.x
npm init @vipress/app my-app -t vue3

# npm 7+, 需要额外的双横线：
npm init @vipress/app my-app -- --t vue3

# yarn
yarn create @vipress/app my-app --t vue3
```

支持的模板有：

- vue3
- vue2

## 运行与打包

```sh
# 运行服务
npm run dev

# 打包服务
npm run build
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

复制完内容后，通过 [localhost:8000](http://localhost:8000/) 访问我们的打包文档就可以了。