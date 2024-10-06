<div align="right">
   <strong>中文</strong> | <a href="README.md">English</a>
</div>

<img src="https://cdn.fosstodon.org/accounts/avatars/111/137/925/464/599/407/original/5a723b0c04db75a8.png" alt="Hugo logo" width="100" height="100" align="right" />

<div align="center">

<h1> Hugo Template </h1>

<p>一个由bep、spf13和其好友基于<a href="https://go.dev/">Go</a>构建的快速灵活的静态站点生成器框架。 这是它的模板。</p>

</div>

<hr/>

<div align="center">
<a href="https://themes.gohugo.io">演示</a> | 
<a href="https://gohugo.io">官网</a> | 
<a href="https://gohugo.io/documentation/">文档</a> | 
<a href="https://discourse.gohugo.io">社区</a>
</div>

<hr/>

## 快速开始

### 修改域名

修改 `config.yml` 或者 `config.toml` 中的 `baseURL` 值

```yml
baseURL: "https://lopins.github.io/hexo-template"
```

```toml
baseURL= "https://lopins.github.io/hugo-template"
```

### 配置主题

1. 拉取主题并进入 `themes/` 并更新相关信息

`git submodule add git@github.com:adityatelange/hugo-PaperMod.git themes/hugo-PaperMod && git submodule update --init --recursive`

2. 在 `config.toml` 中修改 `theme = "hugo-PaperMod"` 或者 在 `config.yml` 修改 `theme: "hugo-PaperMod"`

3. 进入  `themes/hugo-PaperMod` 在 `theme.toml` 或者 `theme.yml` 中配置其他字段

### 应用配置

`git add . && git commit -m ':wrench:docs(themes): Add or update configuration files' && git push origin main`

### 发布文章

1. 启用站点

点击 "Use this template" -> "Create a new repository"

![Use this template to create a new repository](https://github.com/user-attachments/assets/5e9a2358-4402-4dc8-be82-441dac86f4e3)

2. 配置站点

设置并且启用 GitHub Pages 服务

![Set up and enable GitHub Pages service](https://github.com/user-attachments/assets/001b6c80-f4d7-40a9-92fe-ef1c5112dccb)

3. 发布文章

发布文章在 `hugo` 分支。

![Publish an article on the "hugo branch" of Github.](https://github.com/user-attachments/assets/416a223a-837b-42d0-910e-0cb55e3ea284)

## 特别注意

### 使用 **Submodule** 切换主题

```
# Add Submodule - Upadte Submodule
git submodule add git@github.com:litten/hexo-theme-yilia.git themes/yilia
git submodule update --init --recursive

# Delete Submodule
git submodule deinit -f themes/yilia
rm -rf .git/modules/themes/yilia
rm -rf themes/yilia

# Display Submodule - Pull Submodule - Sync Submodule
git submodule status
git submodule foreach git pull origin main
git submodule sync
```

### 权限问题

如果你遇到类似 `remote: Permission to xxx denied to github-actions[bot].` 

当你推送更改时，你需要设置仓库的 `github-actions[bot]` 权限.

设置步骤: `Settings -> Actions -> General -> Workflow permissions -> Read and write permissions -> Save`.

## 开源协议

[MIT License](LICENSE).
