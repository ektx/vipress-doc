# Markdown

vipress 是以 markdown 为文档的基础，通过扩展赋予更多的表现力。vipress 内部使用的 vite，所以服务启动之后，会生成类似于静态服务器的能力。

## 静态资源

对于静态资源，你可以在项目的根目录下创建一个 **public** 文件夹，将你需要的静态文件放到里面进行访问。

```sh
![peppa pig](/peppaPig.jpg)
```

效果如下：

![peppa pig](/peppaPig.jpg)

## 文件内嵌

格式: `#[codeBox](./example.vue)`

文件引用可以让你既能使用到 markdown 的语法，又可以让 vue 在编写时，具有文档编辑器的智能提示。

这里我们对 README.md 进行改造。

首先，新创建一个 README 的文件夹，将之前的 README.md 文件移入，修改名称为 index.md 。

然后，在 README 文件夹下创建一个 demo.vue 文件，输入以下内容用于测试。

```vue
<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world'
    }
  }
}
</script>
```

最后，我们在 index.md 文件中添加以下内容。

```
 #[codeBox](./demo.vue)
```
