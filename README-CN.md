<h1 align="center"><a href="https://github.com/Siricee/hexo-theme-Chic" target="_blank">Chic Theme</a></h1>

<p align="center">
<img src="https://i.loli.net/2019/06/12/5d006bd289aa325037.png" alt="Chic theme">
</p>

> Chic,法语词意同'Elegant'

<p align="center">
<img alt="Author" src="https://img.shields.io/badge/Author-Sirice-lightgray.svg"/>
<img alt="Node" src="https://img.shields.io/badge/Node-6.0%2B-43853d.svg"/>
<img alt="Hexo" src="https://img.shields.io/badge/Hexo-3.0+-0e83cd.svg"/>
<img alt="Device" src="https://img.shields.io/badge/Device-responsive-orange.svg"/>
<img alt="Build Status" src="https://img.shields.io/badge/build-passing-brightgreen"/>
</p>

## 文档语言

- [中文文档](README-CN.md)
- [English](README.md)

## Contents 目录

- [文档语言](#文档语言)
- [Contents 目录](#contents-目录)
- [Introduction 介绍](#introduction-介绍)
- [Demo 演示](#demo-演示)
- [Features 特点](#features-特点)
- [Installation 安装](#installation-安装)
- [Configuration 配置](#configuration-配置)
  - [添加 Tag、Category 页面](#添加-tagcategory-页面)
  - [开启 MathJax 支持（数学公式）](#开启-mathjax-支持数学公式)
  - [图片标题](#图片标题)
- [Customize 自定义](#customize-自定义)
- [FAQ 提问](#faq-提问)
- [Gallary 图片展示](#gallary-图片展示)
- [LICENSE 开源许可](#license-开源许可)

## Introduction 介绍

优雅、功能全面、阅读友好的 hexo 主题。

## Demo 演示

- [Demo site](https://siricee.github.io/hexo-theme-Chic)
- <del>[作者的博客](https://siricee.github.io/)</del> (_不再使用 hexo 驱动_)

## Features 特点

- 恰到好处的留白，优雅却不简陋。
- 夜间模式主题一键切换。
- 多种代码高亮方案。
- 精心挑选的字体，最好的阅读体验。\* _特别推荐 微软正黑_
- 响应式适配移动端/桌面端。
- 支持 MathJax，支持 LaTeX 语法的数学公式

## Installation 安装

```bash
cd your-blog/themes
git clone https://github.com/Siricee/hexo-theme-Chic.git Chic
// Modify theme setting in _config.yml to Chic.
```

## Configuration 配置

<details>
<summary><mark>点击展开配置文件</mark></summary>

```yaml
# Header
navname: Bentham's Blog

# navigatior items
nav:
  Posts: /archives
  Categories: /category
  Tags: /tag
  About: /about

# favicon
favicon: /favicon.ico

# Profile
nickname: Jeremy Bentham

### this variable is MarkDown form.
description: Lorem ipsum dolor sit amet, **consectetur adipiscing elit.** <br>Fusce eget urna vitae velit *eleifend interdum at ac* nisi.
avatar: /image/avatar.jpeg

# main menu navigation
## links key words should not be changed.
## Complete url after key words.
## Unused key can be commented out.
links:
  Blog: /archives
  #  Category:
  #  Tags:
  #  Link:
  #  Resume:
  #  Publish:
  #  Trophy:
  #  Gallary:
  #  RSS:
  #  AliPay:
  ZhiHu: https://www.zhihu.com/people/sirice
  #  LinkedIn:
  #  FaceBook:
  #  Twitter:
  #  Skype:
  #  CodeSandBox:
  #  CodePen:
  #  Sketch:
  #  Gitlab:
  #  Dribble:
  Instagram:
  Reddit:
  #  YouTube:
  #  QQ:
  #  Weibo:
  #  WeChat:
  Github: https://github.com/Siricee

# how links show: you have 2 choice--text or icon.
links_text_enable: false
links_icon_enable: true

# Post page
## Post_meta
post_meta_enable: true

post_author_enable: true
post_date_enable: true
post_category_enable: true
## Post copyright
post_copyright_enable: true

post_copyright_author_enable: true
post_copyright_permalink_enable: true
post_copyright_license_enable: true
post_copyright_license_text: Copyright (c) 2019 <a href="http://creativecommons.org/licenses/by-nc/4.0/">CC-BY-NC-4.0</a> LICENSE
post_copyright_slogan_enable: true
post_copyright_slogan_text: Do you believe in <strong>DESTINY<strong>?
## toc
post_toc_enable: true

# Page
page_title_enable: true

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: MMMM D, YYYY
time_format: H:mm:ss

# stylesheets loaded in the <head>
stylesheets:
  - /css/style.css

# scripts loaded in the end of the body
scripts:
  - /js/script.js
  - /js/tocbot.min.js
    # tscanlin/tocbot: Build a table of contents from headings in an HTML document.
    # https://github.com/tscanlin/tocbot

# plugin functions
## Mathjax: Math Formula Support
## https://www.mathjax.org
mathjax:
  enable: true
  import: demand # global or demand
  ## global: all pages will load mathjax,this will degrade performance and some grammers may be parsed wrong.
  ## demand: Recommend option,if your post need fomula, you can declare 'mathjax: true' in Front-matter
```

</details>
<br>

### 添加 Tag、Category 页面

Hexo 初始化没有 tag、category 页面，需要自行添加，本主题请按以下步骤进行:<br>

1. 执行命令

```bash
hexo new page tag
hexo new page category
```

2. 进入页面目录

```bash
cd source/tag
```

3. 增加 layout 字段

```yaml
// source\tag\index.md
---
title: Tag
layout: tag
---
```

4. category 页面同理，layout 字段键值为 category。 <br>

### 开启 MathJax 支持（数学公式）

相关配置文件内容（`Chic/_config.yml`）：

```yaml
# plugin functions
## Mathjax: Math Formula Support
## https://www.mathjax.org
mathjax:
  enable: true
  import: global # global or demand
  ## global: all pages will load mathjax,this will degrade performance and some grammers may be parsed wrong.
  ## demand: if your post need fomula, you can declare 'mathjax: true' in Front-matter
```

`mathjax`有如下字段：

- `enable`:值为 true 为开启该功能（默认开启）；false 为关闭
- `import`:该字段为 mathjax 的加载方式，可选值为`global`和`demand`。
  - `global`：全局引入，所有页面均加载。好处是便利，缺点是可能会导致部分 markdown 语法被错误解析，比如连续`$$`会被解析为公式；而且全局引入会在没有公式的页面明显浪费页面性能。
  - `demand`【推荐方式】：按需引入。使用方法为在 config 中设置该字段后，文章中如果需要使用 mathjax，在 Front-matter 中声明即可
    ```yaml
    ---
    title: MathJax Test
    date: 2019-07-05 21:27:59
    tags:
    mathjax: true # 加入这个声明，这篇文章就会开启mathjax渲染
    ---
    ```
    LaTeX 语法这里不做解释，本主题中，单 dollar 符号包围的为行内公式，例：`$f(x)=ax+b$`，双 dollar 符号包围的为块公式，例`$$f(x)=ax+b$$`更多写法请参考 LaTeX 和[Demo site 中的公式测试页面](https://siricee.github.io/hexo-theme-Chic/2019/07/05/MathJax_test/)。

### 图片标题

在 Hexo 中，你有两种方式引入图片：

- GFM 语法直接引入（不显示图片标题）
  ```
  ![pic](picUrl)
  ```
- Hexo 内置标签系统-图片标签（显示图片标题）
  `    {% img [class names] /path/to/image [width] [height] '"alt text" "title text"' %}
   `
  所以如果你仅仅想方便快捷引入图片，那你应该使用 GFM 语法，这种方式也是兼容性最好的方案。

但如果你需要显示**图片标题**，你就应该使用第二种方案，**图片标签方式**。

- `"alt text"` 用来显示当图片加载失败时垫底的提示文字。
- `"title text"` 将会被显示到图片下方作为图片标题。

你可以在 [Demo site](https://siricee.github.io/hexo-theme-Chic/2019/06/05/markdown_test/#Image) 中查看图片标题的效果和示例语法。

## Customize 自定义

- 代码高亮风格 在 `hexo-theme-Chic\themes\Chic\source\css\style.styl` 中

  ```css
  // light theme code-block style
  body:not(.dark-theme) {
    @import "_highlight/atelier-forest-light.styl"; // 亮色主题
  }
  // dark theme code-block style
  body.dark-theme {
    @import "_highlight/darkula.styl";              // 暗色主题
  }
  ```
  将预设地址改为 `_highlight` 文件夹中的 stylus 文件即可更换代码高亮风格。

  此处需注意 亮色和暗色主题的样式包未必完全一致，如行高等设定，推荐尽量使用同一套代码主题包的不同模式，如 `atelier-savanna-light.styl` 和 `atelier-savanna-dark.styl`

- 自定义 css(stylus 语法) 您可以在 `hexo-theme-Chic\themes\Chic\source\css\custom.styl` 路径文件中添加 css 规则

- 自定义 JavaScript 您可以在 `hexo-theme-Chic\themes\Chic\source\js` 路径中添加 js 脚本，并在\_config.yml 中 `script` 字段添加声明。

## FAQ 提问

1. 我在二级地址（非 github page 根 repo，即 username.github.io/Blog）上部署了 hexo，为什么 css、avatar 等资源都 404 了？

   答：此处需要另外填写主配置文件 URL 字段。以该主题 repo 为例：

   ```yaml
   # (blog/_config.yml)

   # URL
   ## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
   url: https://siricee.github.io/hexo-theme-Chic/ # 此处为你的部署url
   root: /hexo-theme-Chic/ # 此处为你的项目根文件夹url。
   permalink: :year/:month/:day/:title/
   permalink_defaults:
   ```

2. 我想将黑色主题设为默认全局主题该怎么做？

   答：此处只需要改一下`themes\Chic\source\js\script.js`中`doucument.ready`函数的内容。代码如下

   ```javascript
    document.ready(
        // toggleTheme function.
        // this script shouldn't be changed.
        () => {
            const pagebody = document.getElementsByTagName('body')[0]

            const default_theme = 'light' // 改为 'dark'
   ```

   即可实现效果。

3. 常见问题待补充……

## Gallary 图片展示

![screely-1560228577821.png](https://i.loli.net/2019/06/12/5d00a0850285252790.png)
![screely-1560228791041.png](https://i.loli.net/2019/06/12/5d00a0856063661133.png)
![screely-1560228621288.png](https://i.loli.net/2019/06/12/5d00a084e29cd40271.png)
![screely-1560228761180.png](https://i.loli.net/2019/06/12/5d00a0855d28072392.png)

![smartmockups_jwrd4ru3.png](https://i.loli.net/2019/06/12/5d00a085d115d16700.png)

![smartmockups_jwrd9y4r.png](https://i.loli.net/2019/06/12/5d00a085ec26284832.png)

## LICENSE 开源许可

![](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
