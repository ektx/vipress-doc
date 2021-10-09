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

### Markdown 文件内嵌

格式: `#[template](path)`

vipress 支持文件的一级引用。

假设你有以下2个文件 parent.md 与 child.md 文件，你可以使用以下方法在 parent.md 中引用 child.md 内容。最终输出是同一个文件。

目录结构:

```
---- project            # 项目根目录
  ├──── parent.md       # 父级文件
  ├──── child.md        # 子级文件
```

parent.md

```
 # parent file

 #[md](./child.md) 
```

child.md

```
 # child file
```

合并为:

```
 # parent

 # child file
```
