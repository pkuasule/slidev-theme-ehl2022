# EHL China PPT Theme 傻瓜教程
> 鸣谢 to [Slidev](https://sli.dev/).

## 第1步 安装Git
* 前往官网[git-scm.com](https://git-scm.com/downloads)下载并安装git。

## 第2步 安装node.js和npm
* 前往官网[nodejs.org](https://www.nodejs.org)下载并安装最新版本的node.js。
* npm包管理工具会随node.js一起安装

## 第3步 配置 npm 以允许无 sudo 全局安装
1. 打开SSH客户端软件（Mac上为Terminal, Windows上为Powershell）。
2. 输入以下代码，回车：
```bash
npm config set prefix ~/.npm-packages
```
## 第4步 全局安装Slidev
> 全局安装Slidev能解决很多bug，比如就不会出现`没有Slidev命令`的问题。
1. 打开SSH客户端软件。
2. 输入以下代码，回车：
```bash
$ npm i -g @slidev/cli
```

***
注意：以上4步请在使用本repo的克隆前完成
***

## 第5步：安装一个空白的slidev项目
```bash
$ npm init slidev
```

## 第6步：使用本主题
### 6A 默认方法
```bash
cd slidev
rm slides.md 
curl https://github.com/pkuasule/slidev-theme-ehl2022/blob/main/example.md -o temp.md
mv temp.md slides.md
```
### 6B 手动方法
进入slidev文件夹，打开slides.md，更改默认配置的theme为ehl2022。
```markdown
---
theme: ehl2022
---
```
在服务启动后，它会自动提示你是否安装该主题：
```bash
? The theme "@slidev/theme-seriph" was not found in your project, do you want to install it now? › (Y/n)
```
按`Y`键安装即可

## 第6步：预览当前模板效果
```bash
$ slidev
```

## 第7步：新建、编辑自己的文件
### 7.1 新建并打开自己的文件
```bash
$ slidev 你想要的文件名（可以不要".md"后缀） --open --remote
```
比如
```bash
$ slidev Effective_Communication --open --remote
```
> 注意：下次输入同样的命令将不会再新建文件，而是直接启动服务（即播放）。

### 7.2 编辑自己的文件
用任意文本编辑器，打开`你想要的文件名.md`编辑即可。
> 建议的文本编辑器：[Visual Studio Code](https://code.visualstudio.com/)。

***
# 关闭PPT
直接关闭SSH终端即可。

***
# 导出为PDF
## 1.安装导出成PDF所要使用的服务
```bash
$ npm i -g playwright-chromium
```
## 2.导出
```bash
$ slidev export ‘你要导出的文件.md‘
```
> 导出的pdf文件可以在项目的跟目录下找到。