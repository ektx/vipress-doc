# 设置

首先我们了解一下 vipress 在启动后，默认在项目中生成的目录结构。

```
---- project            # 项目根目录
  ├──── /.vipress       # 生成的环境目录
  │  ├──── /md-pages    # markdown 文件转化目录
  │  ├──── /src         # 模板目录
  │  ├──── .gitignore   # 忽略文件
  │  ├──── config.js    # 项目配制文件
  │  └──── menu.js      # 菜单配制文件
  │  
  ├──── package.json    # 依赖包
  └──── ...             # 其它你自己的文件内容
```