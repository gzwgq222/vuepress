(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{432:function(t,a,e){"use strict";e.r(a);var s=e(45),l=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("h3",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),e("blockquote",[e("p",[t._v("集中式 vs 分布式")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("集中式（SVN）")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("分布式（git）")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("是否有中央服务器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有。开发人员需要从中央服务器获得最新版本的项目然后在本地开发，开发完推送给中央服务器。因此脱离服务器开发者是几乎无法工作的")])]),t._v(" "),e("tr",[e("td",[t._v("网络依赖")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必须要联网才能工作，而且对网络的依赖性较强，如果推送的文件比较大而且网络状况欠佳，则提交文件的速度会受到很大的限制")])]),t._v(" "),e("tr",[e("td",[t._v("文件存储格式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("按照原始文件存储，体积较大")])]),t._v(" "),e("tr",[e("td",[t._v("是否有版本号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有")])]),t._v(" "),e("tr",[e("td",[t._v("分支操作的影响")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("创建新的分支则所有的人都会拥有和你一样的分支")])]),t._v(" "),e("tr",[e("td",[t._v("提交")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("提交的文件会直接记录到中央版本库")])])])]),t._v(" "),e("ul",[e("li",[t._v("初始化 Git 仓库"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git init\n")])])])]),t._v(" "),e("li",[t._v("clone"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://github.com/gzwgq222/blog-server.git\n")])])])]),t._v(" "),e("li",[t._v("设置用户信息"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config --global user.name 'gzwgq222'\ngit config --global user.email '445722156@qq.com'\n")])])]),t._v("如果使用了 "),e("code",[t._v("--global")]),t._v(" 选项，那么该命令只运行一次，设置的是全局的用户信息。当你想针对特定的项目设置不用的用户名称和邮箱地址，可以在项目目录下运行没有 --global 的选项命令来配置"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config user.name 'gzwgq222'\ngit config user.email '445722156@qq.com'\n")])])])]),t._v(" "),e("li",[t._v("查看配置信息"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config --list\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"暂存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#暂存"}},[t._v("#")]),t._v(" 暂存")]),t._v(" "),e("ul",[e("li",[t._v("暂存所有，不包含删除"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git add .\n")])])])]),t._v(" "),e("li",[t._v("检查当前文件状态"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git status\n")])])]),e("code",[t._v("git status -s")]),t._v(" -s 选项查看简洁信息")]),t._v(" "),e("li",[t._v("查看未暂存的文件更改了那些部分"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git diff\n")])])])]),t._v(" "),e("li",[t._v("提交至本地仓库"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git commit -m 'commit message'\n")])])])]),t._v(" "),e("li",[t._v("取消暂存"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset HEAD <file>\n")])])])]),t._v(" "),e("li",[t._v("撤销对文件的修改"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -- <file>\n")])])])]),t._v(" "),e("li",[t._v("查看提交历史"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log\n")])])]),e("code",[t._v("git log -p -2")]),t._v("  -p 选项查看每次提交的内容差异， -2 查看最近两次提交"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git log --oneline --decorate --graph --all\n")])])]),t._v("输出你的提交历史、各个分支的指向以及项目的分支分叉情况")])]),t._v(" "),e("h3",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),e("ul",[e("li",[t._v("查看远程仓库"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote\n")])])]),t._v("可以添加 -v 选项，会显示远程仓库 Git 保存的简写与队友的 URL")]),t._v(" "),e("li",[t._v("添加远程仓库"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git remote add <shortname> <url>\n")])])])]),t._v(" "),e("li",[t._v("从远程仓库拉取信息"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git fetch [remote-name]\n")])])])]),t._v(" "),e("li",[t._v("推送至远程仓库"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push [remote-name] [branch-name]\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" tag")]),t._v(" "),e("ul",[e("li",[t._v("列出标签"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git tag\n")])])])]),t._v(" "),e("li",[t._v("附注标签"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git tag -a v1.0 -m 'my version v1.0'\n")])])])]),t._v(" "),e("li",[t._v("查看标签信息"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git show v1.0\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),e("ul",[e("li",[t._v("查看分支"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch\n")])])]),t._v("-a 选项查看所有， -v 选项查看本地")]),t._v(" "),e("li",[t._v("创建分支"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch <branch-name>\n")])])])]),t._v(" "),e("li",[t._v("切换分支"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout <branch-name>\n")])])]),t._v("创建 iss001 分支并切换"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b iss001\n")])])])]),t._v(" "),e("li",[t._v("删除本地分支"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -d iss001\n")])])])]),t._v(" "),e("li",[t._v("删除远程分支"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push origin --delete <branch-name>\n")])])])]),t._v(" "),e("li",[t._v("拉取"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git fetch\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git pull\n")])])]),e("code",[t._v("git fetch")]),t._v(" 只是把远程仓库的数据拉取下来，并不会进行合并，"),e("code",[t._v("get pull")]),t._v("，相当于先 "),e("code",[t._v("git fetch")]),t._v(" 然后 "),e("code",[t._v("git merge")]),t._v("\n为了确保 git 提交记录干净，拉取的时候最好使用 "),e("code",[t._v("git pull --rebase")]),t._v(" 或者 "),e("code",[t._v("git pull")]),t._v(" 完成后再 "),e("code",[t._v("git --rebase")])])]),t._v(" "),e("h3",{attrs:{id:"变基"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变基"}},[t._v("#")]),t._v(" 变基")]),t._v(" "),e("ul",[e("li",[t._v("变基"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git pull --rebase\ngit --rebase\n")])])])])])])}),[],!1,null,null,null);a.default=l.exports}}]);