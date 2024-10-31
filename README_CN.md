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
baseURL: "https://lopins.github.io/hugo-template"
```

### [配置主题](https://github.com/lopins/hugo-template/issues/2)

1. 拉取主题并进入 `themes/` 并更新相关信息

   `git submodule add git@github.com:zhaohuabing/hugo-theme-cleanwhite.git themes/cleanwhite && git submodule update --init --recursive`

   `cp -r exampleSite/* ../`

2. 在 `config.yml` 或者 `config.toml` 修改 `theme` 属性值为 "cleanwhite"`

~~3. 在 `config.yml` 或者 `config.toml` 修改 `editPost: "https://github.com/lopins/hugo-template/tree/main/content"`~~

### 应用配置

`git add . && git commit -m ':wrench:docs(themes): Add or update configuration files' && git push origin main`

### [发布文章](https://github.com/lopins/hugo-template/issues/1)

1. 启用站点

   点击 "Use this template" -> "Create a new repository"

![1. Create a new repository](https://github.com/user-attachments/assets/1046f118-8c2a-4ed8-bc8b-1258941455c4)

2. 配置站点

   设置并且启用 GitHub Pages 服务

![2. Set up GitHub Pages branch](https://github.com/user-attachments/assets/acd90bfd-0a25-4809-a39b-fc5d562f414b)

3. 发布文章

   发布文章在 `hugo` 分支。

![3. Write or Upload an Markdown file](https://github.com/user-attachments/assets/2b1a97ea-ac79-4647-a340-f71569699c11)

## 特别注意

### 使用 **Submodule** 切换主题

```
# Add Submodule - Upadte Submodule
git submodule add git@github.com:zhaohuabing/hugo-theme-cleanwhite.git themes/cleanwhite
git submodule update --init --recursive

# Delete Submodule
git submodule deinit -f themes/cleanwhite
rm -rf .git/modules/themes/cleanwhite
rm -rf themes/cleanwhite
git config --remove-section submodule.themes/cleanwhite
git config -f .gitmodules --remove-section submodule.themes/cleanwhite
git rm --cached themes/cleanwhite
git add . && git commit -m 'Update .gitmodules before removing submodule'


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
