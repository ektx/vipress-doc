# 扩展

## 示例代码块

可以通过示例代码块功能，书写一次代码，同时展示示例与代码内容的效果。方便组件的开发。

目前示例代码块功能仅支持 Vue 3.x 的示例效果。

### 内嵌代码方式

**格式如下：**

```
::: codeBox
&#96;&#96;&#96;vue
&lt;template>
  &lt;h1>{{ msg }}&lt;/h1>
&lt;/template>

&lt;script setup>
const msg = 'Hello Vue' 
&lt;/script>
&#96;&#96;&#96;
:::
```

效果如下：

::: codeBox
```vue
<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
const msg = 'Hello Vue' 
</script>
```
:::

### 引入 vue 文件方式

同时，你也可以通过 [文档中引用](/docs/doc#文件引用) vue 文件。不过，在使用引用 vue 文件时，你需要按以下的目录结构来约束你的文件。

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