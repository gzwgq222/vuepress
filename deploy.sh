#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo -e "\033[32m 提交的信息：$1 \033[0m"

echo -e "\033[32m 开始编译... \033[0m"
# 本地编译
yarn docs:build

echo -e "\033[32m 编译后的文件推送至 deploy 分支... \033[0m"
# 编译后的文件
cd docs/.vuepress/dist

# 编译文件添加至缓存区
git init
git add -A
git commit -m "$1"


# 编译文件推送至 deploy 分支
git push -f git@github.com:gzwgq222/vuepress.git master:deploy

echo -e "\033[32m 源码推送至仓库... \033[0m"

cd -
# 源码推送至仓库，触发 jenkins 构建
git add .
git commit -m "$1"
git pull --rebase
git push

echo -e "\033[32m 构建、部署完成！ \033[0m"