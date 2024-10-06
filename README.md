<div align="right">
   <a href="README_CN.md">中文</a> | <strong>English</strong>
</div>

<img src="https://cdn.fosstodon.org/accounts/avatars/111/137/925/464/599/407/original/5a723b0c04db75a8.png" alt="Hugo logo" width="100" height="100" align="right" />

<div align="center">

<h1> Hugo Template </h1>

<p>A fast and flexible static site generator built with love by bep, spf13, and friends in <a href="https://go.dev/">Go</a>.</p>

</div>

<hr/>

<div align="center">
<a href="https://themes.gohugo.io">Demo</a> | 
<a href="https://gohugo.io">Official</a> | 
<a href="https://gohugo.io/documentation/">Docs</a> | 
<a href="https://discourse.gohugo.io">Community</a>
</div>

<hr/>

## Get Started

### Define Domain

Change the `baseURL` in `config.yml` or `config.toml` to your site's URL

```yml
baseURL: "https://lopins.github.io/hexo-template"
```

or 

```toml
baseURL= "https://lopins.github.io/hugo-template"
```

### Configure Theme

1. pull theme into `themes/` and update it.

`git submodule add git@github.com:adityatelange/hugo-PaperMod.git themes/hugo-PaperMod && git submodule update --init --recursive`

2. update `theme = "hugo-PaperMod"` in `config.toml` or `theme: "hugo-PaperMod"` in `config.yml` and configure other fields

3. into  `themes/hugo-PaperMod` to configure the theme in `theme.toml` or `theme.yml`

### Push to Github

`git add . && git commit -m ':wrench:docs(themes): Add or update configuration files' && git push origin main`

### Publish Article

1. Install

Click "Use this template" -> "Create a new repository"

![Use this template to create a new repository](https://github.com/user-attachments/assets/5e9a2358-4402-4dc8-be82-441dac86f4e3)

2. Set up

Set up and enable GitHub Pages service

![Set up and enable GitHub Pages service](https://github.com/user-attachments/assets/001b6c80-f4d7-40a9-92fe-ef1c5112dccb)

3. Publish

Publish an article on the "hugo branch" of Github.

![Publish an article on the "hugo branch" of Github.](https://github.com/user-attachments/assets/416a223a-837b-42d0-910e-0cb55e3ea284)

## Notice

### **Submodule** to Change Theme

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

### Permission

If you meet the problem like `remote: Permission to xxx denied to github-actions[bot].` 

When you push your changes, you need to give the permission to the `github-actions[bot]` in your repo's.

By following the steps below: `Settings -> Actions -> General -> Workflow permissions -> Read and write permissions -> Save`.

## License

[MIT License](LICENSE).