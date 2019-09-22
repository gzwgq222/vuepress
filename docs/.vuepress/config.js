module.exports = {
  title: '牧羊人',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: `/gong.png` }]
  ],
  themeConfig: {
    nav:[
      { text: 'javascript系列', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: '算法', link: '/algorithm/' }, // 外部链接
      {
        text: 'ES6',
        items: [
          { text: 'GitHub地址', link: '/algorithm/' },
          { text: '算法仓库', link: '/algorithm/'}
        ]
      },
      { text: 'GitHub', link: 'https://github.com/gzwgq222' } // 外部链接
    ]
  }
}