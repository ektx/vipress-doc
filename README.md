# ViPress

## 什么是 ViPress ?

ViPress 是一款为 Vue2/Vue3 组件开发场景而生的文档工具，支持 Markdown 文档生成。

vipress 会自动根据 markdown 生成对应的文档和路由，同时支持配置一级导航和路由以满足自定义需求。

## 特性

- 📦 开箱即用，让你快速开启文档编写和组件开发
- 🏡 独立的组件预览体验，包含：组件概览，示例
- 📋 对 Markdown 语法进行扩展，在文档中直接引入文件
- 🌒 两种模式以及多种风格支持

## 使用


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
