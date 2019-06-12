<h1 align="center"><a href="https://github.com/Sirice19/hexo-theme-Chic" target="_blank">Chic Theme</a></h1>

<p align="center">
<img src="https://i.loli.net/2019/06/12/5d006bd289aa325037.png" alt="Chic theme">
</p>

> Chic ,French word means 'Elegant' in English.

<p align="center">
<img alt="Author" src="https://img.shields.io/badge/Author-Sirice-blue.svg"/>
<img alt="node.js" src="https://img.shields.io/badge/node.js-6.0%2B-43853d.svg?style=flat-square"/>
<img alt="Hexo" src="https://img.shields.io/badge/hexo-3.0+-0e83cd.svg?style=flat-square"/>
<img alt="Build Status" src="https://img.shields.io/badge/device-responsive-orange.svg"/>
<img alt="Build Status" src="https://img.shields.io/travis/viosey/hexo-theme-material.svg?style=flat-square"/>
</p>

## Contents 目录
- [Introduction 介绍](#introduction-介绍)
- [Demo 演示](#demo-演示)
- [Features 特点](#features-特点)
- [Installation 安装](#installation-安装)
- [Customize 自定义](#customize-自定义)
- [Gallary 图片展示](#gallary-图片展示)
- [License 开源许可](#license-开源许可)


## Introduction 介绍
An elegant,powerful,easy-to-read Hexo theme.

优雅、功能全面、阅读友好的hexo主题。

## Demo 演示
- [Demo site](https://sirice19.github.io/hexo-theme-Chic)
- [Author's blog](https://sirice19.github.io/)

## Features 特点
- Appropriate blank blocks,elegant but not simple.

  恰到好处的留白，优雅却不简陋。
- Light/Dark theme，just one click.

  夜间模式主题一键切换。
- Abundant highlight mode.

  多种代码高亮方案。
- elaborately selected fonts,best reading experience. \* *'Microsoft Jhenghei' especially recommended.*

  精心挑选的字体，最好的阅读体验。\* *特别推荐 微软正黑*
- Auto fit Mobile and Screen responsively.

  响应式适配移动端/桌面端。

## Installation 安装

```bash
cd your-blog/themes
git clone https://github.com/Sirice19/hexo-theme-Chic.git Chic
// Modify theme setting in _config.yml to Chic.
```

## Configuration 配置
<details>
<summary><mark>click here to spread</mark></summary>

```yaml
# html lang
language: en

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
  Blog: /
#  Category:
#  Tags:
#  Link:
#  Resume:
#  Publish:
#  Trophy:
#  Gallary:
#  RSS:
#  AliPay:
#  ZhiHu:
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
  QQ:
#  Weibo:
#  WeChat:
  Github:

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
post_copyright_solgan_enable: true
post_copyright_solgan_text: Do you believe in <strong>DESTINY<strong>?
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
```
</details>

## Customize 自定义
- 代码高亮风格 在`hexo-theme-Chic\themes\Chic\source\css\style.styl`中更改highlight为`_highlight`文件夹中的stylus文件即可更换代码高亮风格。

- 自定义css(stylus语法) 您可以在`hexo-theme-Chic\themes\Chic\source\css\custom.styl`路径文件中添加css规则

- 自定义JavaScript 您可以在`hexo-theme-Chic\themes\Chic\source\js`路径中添加js脚本，并在_config.yml中`script`字段添加声明。

  ===================================================

- Highlight Style： Enter `hexo-theme-Chic\themes\Chic\source\css\style.styl` change stylesheet with key word `_highlight` in link in `_highlight` dictionary.
- Customize stylesheets in path below.(stylus）

   `hexo-theme-Chic\themes\Chic\source\css\custom.styl`

- Customize javascripts in dictionary below.

  `hexo-theme-Chic\themes\Chic\source\js`

  Then add declareation in _config.yml key word 'script'

## Gallary 图片展示
![screely-1560228577821.png](https://i.loli.net/2019/06/12/5d00a0850285252790.png)
![screely-1560228791041.png](https://i.loli.net/2019/06/12/5d00a0856063661133.png)
![screely-1560228621288.png](https://i.loli.net/2019/06/12/5d00a084e29cd40271.png)
![screely-1560228761180.png](https://i.loli.net/2019/06/12/5d00a0855d28072392.png)

![smartmockups_jwrd4ru3.png](https://i.loli.net/2019/06/12/5d00a085d115d16700.png)

![smartmockups_jwrd9y4r.png](https://i.loli.net/2019/06/12/5d00a085ec26284832.png)

## LICENSE 开源许可
Chic © [@Sirice](https://github.com/Sirice19)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
