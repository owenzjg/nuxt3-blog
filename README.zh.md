<p align="center">
<img width="200px" src="public/favicon.png" />
</p>
<h1 align="center">💎Nuxt3-Blog</h1>

---

[![](https://img.shields.io/github/license/yunyuyuan/nuxt3-blog)](/LICENSE) ![](https://img.shields.io/badge/vue-v3-%234FC08D?logo=vue.js) ![](https://img.shields.io/badge/nuxt-v3-%2300DC82?logo=nuxt.js)

> 🚀[https://blog.yunyuyuan.net](https://blog.yunyuyuan.net)

[English Readme](/README.md) | 中文说明

## 博客特性
* 💻 **5分钟完成搭建**。完全免费，不用写一行代码。
* 🤝 **方便使用**。全能的后台管理界面，只需一个token，就可**在网页端更新配置，新增/修改/删除博客内容**，不用`notepad`，更不用`git push`。
* 📷 **集成图床**。集成smms图床和tinypng图片压缩，网页端一键上传博客图片。
* 🌐 **纯静态**。打包为纯静态网站，无需后端。
* 🔍 **SEO友好**。每个HTML页面都是已经渲染完毕的，搜索引擎可收录。
* 🔒 **可加密**。可以对任意单篇**文章/记录/文化**加密，也可以对某些内容单独加密，只有输入密码才可查看。
  * 🚪整篇加密:  
      <img height="300px" src="https://s2.loli.net/2023/03/09/6loknpQFATqSOMB.png"/>
  * 🚪部分加密:  
      <img height="300px" src="https://s2.loli.net/2023/03/09/9UQurkTGaOSY3j4.png"/>

## 教我搭建
#### 一键部署 (注意：请取消勾选`Create private Git Repository`)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyunyuyuan%2Fnuxt3-blog&repository-name=nuxt3-blog)

#### 更改用户名
把`config.ts`中的`githubName`更改为你自己的Github用户名。

#### 获取Token
在 https://github.com/settings/tokens/new 生成一个Token，需要勾选**repo**权限，点击`Generate token`。

#### 额外事项
* 若要使用浏览量统计功能，则需要[注册MongoDB账号](https://www.mongodb.com/cloud/atlas/register)，并开启[MongoDB整合](https://vercel.com/integrations/mongodbatlas)
* 若要使用评论功能，则需要为Github安装[giscus](https://github.com/apps/giscus)，并开启[discussion](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)，然后填写`config.ts`中的`CommentRepoId`和`CommentDiscussionCategoryId`  
  参考giscus.app，[填写](https://giscus.app/zh-CN#:~:text=%E4%BB%93%E5%BA%93%EF%BC%9A,%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%AD%A4%E4%BB%93%E5%BA%93%E3%80%82) **你的仓库** 的地址后，复制`data-repo-id`和`data-category-id`，分别对应`CommentRepoId`和`CommentDiscussionCategoryId`，位置在[data-repo-id和data-category-id](https://giscus.app/zh-CN#:~:text=%E5%9C%A8%E4%BD%A0%E6%83%B3%E8%AE%A9%E8%AF%84%E8%AE%BA%E5%87%BA%E7%8E%B0%E7%9A%84%E4%BD%8D%E7%BD%AE%E6%B7%BB%E5%8A%A0%E4%BB%A5%E4%B8%8B%20%3Cscript%3E%20%E6%A0%87%E7%AD%BE%E3%80%82%E4%BD%86%E5%A6%82%E6%9E%9C%E5%B7%B2%E7%BB%8F%E5%AD%98%E5%9C%A8%E5%B8%A6%E6%9C%89%20giscus%20%E7%B1%BB%E7%9A%84%E5%85%83%E7%B4%A0%EF%BC%8C%E5%88%99%E8%AF%84%E8%AE%BA%E4%BC%9A%E8%A2%AB%E6%94%BE%E5%9C%A8%E9%82%A3%E9%87%8C%E3%80%82)

## 待开发
#### 特性
- [ ] 404页面
- [x] 在本地`npm run dev`下更新数据
- [ ] 自动化测试
- [x] 纯静态网站生成(SSG)
- [ ] 插件系统
- [x] 支持serverless function上传图片
- [x] 数据库集成(浏览量统计)
- [ ] algolia全站搜索
- [ ] 博客图片备份与迁移
- [x] 密码修改(目前仅支持在`npm run dev`下修改)


#### 外观
- [x] 夜间模式
- [x] 国际化
- [ ] 多种布局主题(缺少UI设计)
- [x] 自定义主题色
##### 低优先级特性
- [ ] 不同加密页面可使用不同的密码
- [ ] 让monaco editor支持额外的markdown语法高亮
- [ ] 一键拉取上游github仓库更新 
- [ ] IV for AES encryption
- [x] 块级加密
- [ ] SSR, 用于服务端渲染

## Changelog

[CHANGELOG.md](/CHANGELOG.md)

## 其他
* 技术解答/交流qq群：745105612
* 邮箱：me@yunyuyuan.net
* discord: https://discord.gg/HtSehSMYXa
