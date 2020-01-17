#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "提交的信息：$1"

# 添加到仓库
git add .
git commit -m "$1"
git pull --rebase
git push


# 生成静态文件
# npm run docs:build
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "$1"


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:gzwgq222/vuepress.git master:deploy

cd -