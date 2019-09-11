<h1 align="center"><a href="https://github.com/Siricee/hexo-theme-Chic" target="_blank">Chic Theme</a></h1>

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

## Doc language

- [中文文档](README-CN.md)
- [English](README.md)

## Contents
- [Doc language](#doc-language)
- [Contents](#contents)
- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Add 'Tag','Category' Page](#add-tagcategory-page)
  - [MathJax (Render LaTeX Formula)](#mathjax-render-latex-formula)
- [Customize](#customize)
- [FAQ](#faq)
- [Gallary](#gallary)
- [LICENSE](#license)


## Introduction
An elegant,powerful,easy-to-read Hexo theme.

## Demo
- [Demo site](https://siricee.github.io/hexo-theme-Chic)
- [Author's blog](https://siricee.github.io/)

## Features
- Appropriate blank blocks,elegant but not simple.

- Light/Dark theme，just one click.

- Abundant highlight mode.

- elaborately selected fonts,best reading experience. \* *'Microsoft Jhenghei' especially recommended.*

- Auto fit Mobile and Screen responsively.

- Support MathJax,Support Formula written in LaTeX.

## Installation

```bash
cd your-blog/themes
git clone https://github.com/Siricee/hexo-theme-Chic.git Chic
// Modify theme setting in _config.yml to Chic.
```

## Configuration
<details>
<summary><mark>click here to spread</mark></summary>

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

### Add 'Tag','Category' Page

There is no 'tag' or 'category' page in initialized site. If you need it, please follow the steps below.

1. execute command
```bash
hexo new page tag
hexo new page category
```
2. enter the dictionary
```bash
cd source/tag
```
3. add 'layout' key
```yaml
// source\tag\index.md
---
title: Tag
layout: tag
---
```
4. So do the category page.please set keyword 'layout' category.

### MathJax (Render LaTeX Formula)

Related config file（`Chic/_config.yml`）：
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
`mathjax` has keywords below：
- `enable`: value`true` enable mathjax(default set `true`); value`false` disable.
- `import`:this key sets mathjax load method，option could be `global` or `demand`.
  - `global`：global import，all pages will load script.It's convenient，but **it may cause some MarkDown grammers parsed wrong**.for example, consecutive `$$` will be rendered as a formula；Besides,global import will waste performance in pages without any formula.
  - `demand`【Recommended】：import mathjax when you need.After you set this value，if you need use formula,just declare it in post Front-matter.Here is an example below.
    ```yaml
    ---
    title: MathJax Test
    date: 2019-07-05 21:27:59
    tags:
    mathjax: true # add this statement,MathJax will enable in this post.
    ---
    ```
LaTeX grammers will not be illustrated in this doc. In Chic theme, Single '$' rounded statement is regarded as inline formula like `$f(x)=ax+b$` ; Double '$' rounded statement is regarded as block formula like `$$f(x)=ax+b$$`.More information please read LaTeX doc and [Formula test page in Demo Site](https://siricee.github.io/hexo-theme-Chic/2019/07/05/MathJax_test/).




## Customize

- Highlight Style： Enter `hexo-theme-Chic\themes\Chic\source\css\style.styl` change stylesheet with key word `_highlight` in link in `_highlight` dictionary.

- Customize stylesheets in path below.(stylus）

   `hexo-theme-Chic\themes\Chic\source\css\custom.styl`

- Customize javascripts in dictionary below.

  `hexo-theme-Chic\themes\Chic\source\js`

  Then add declareation in _config.yml key word 'script'

## FAQ

1. I deployed my site on second-level url(such as username.github.io/Blog), why my css,avatar and other sources  missed(404 error)?

    Answer: You need change some URLs in root config url keyword. For instance:
    ```yaml
    # (blog/_config.yml)

    # URL
    ## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
    url: https://siricee.github.io/hexo-theme-Chic/  # this is your deploy url.
    root: /hexo-theme-Chic/  # this is your root folder url.
    permalink: :year/:month/:day/:title/
    permalink_defaults:
    ```

2. How to set the dark theme as default theme for whole site automatically?
   
   Answer: You need to change some codes in `themes\Chic\source\js\script.js`, function `doucument.ready` as below.
   ```javascript
   document.ready(
    function () {
        // ...Omit part of the code
        const isDark = currentTheme === 'dark';
        // change this line to
        // const isDark = currentTheme !== 'dark';
   ```
   Now, you have already set the dark theme as default successfully.

3. More questions will be added later...

## Gallary
![screely-1560228577821.png](https://i.loli.net/2019/06/12/5d00a0850285252790.png)
![screely-1560228791041.png](https://i.loli.net/2019/06/12/5d00a0856063661133.png)
![screely-1560228621288.png](https://i.loli.net/2019/06/12/5d00a084e29cd40271.png)
![screely-1560228761180.png](https://i.loli.net/2019/06/12/5d00a0855d28072392.png)

![smartmockups_jwrd4ru3.png](https://i.loli.net/2019/06/12/5d00a085d115d16700.png)

![smartmockups_jwrd9y4r.png](https://i.loli.net/2019/06/12/5d00a085ec26284832.png)

## LICENSE
Chic © [@Sirice](https://github.com/Siricee)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
