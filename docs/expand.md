# 扩展

## 示例代码块

可以通过示例代码块功能，书写一次代码，同时展示示例与代码内容的效果。方便组件的开发。

目前示例代码块功能仅支持 Vue 3.x 的示例效果。

### 内嵌代码方式

**格式如下(以下是 vue3 的示例)：**

```
::: codeBox
&#96;&#96;&#96;vue
&lt;template&gt;
  &lt;h1&gt;{{ msg }}&lt;/h1&gt;
&lt;/template&gt;

&lt;script setup&gt;
  const msg = 'Hello Vue'
&lt;/script&gt;
&#96;&#96;&#96;
:::
```

**效果如下：**

::: codeBox
```vue
<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
const msg = 'Hello Vue'
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
</style>
```
:::

### 文件引用

同时，你也可以通过 [【文档中引用】](/docs/doc#文件内嵌) vue 文件。不过，在使用引用 vue 文件时，你需要按以下的目录结构来约束你的文件。

```
---- project            # 项目根目录
  ├──── /doc            # 静态文件地址（自建）
  │ └──── /readme       # 要使用引用的文件目录
  │   ├──── index.md    # 主页面
  │   └──── child.vue   # 单独的 vue 文件
  └──── ...             # 其它你自己的文件内容
```

在 readme/index.md 文件中引用 child.vue

```
 ::: codeBox
 &#96;&#96;&#96;vue
 #[vue](./child.vue)  
 &#96;&#96;&#96;
 :::
```

目录的配制，如下：

```js
{
  label: 'readme',
  to: '/doc/readme'
},
```

### NPM 资源使用

对于 NPM 的文件，你可以安装依赖包后，在 script 下直接 import 引用。

```
::: codeBox
&#96;&#96;&#96;vue
&lt;template>
  &lt;div>&lt;/div>
&lt;/template>

&lt;script>
import * as PIXI from 'pixi.js'

...
&lt;/script>
&#96;&#96;&#96;
:::
```

## 虚拟文件引用

vipress 将项目的默认基础信息，设置成了一个单独的虚拟文件，在开发时，你可以通过以下方式引用。

```js
import config from '@@vipress-plugin-config'

console.log(config)
```

具体返回的信息为你的设置信息，你可以访问 [【设置】](/docs/setting) 查看更多信息。
