#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run docs:build
yarn docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add .
git commit -m 'deploy'
git pull --rebase

# 推送到 branch-deploy 分支
# git push -f git@github.com:gzwgq222/vuepress.git master:branch-deploy

git push

cd -