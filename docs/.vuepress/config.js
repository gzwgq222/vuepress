module.exports = {
  base: '/vuepress/',
  title: 'Notes',
  description: 'Stay hungry Stay foolish',
  head: [
    ['link', { rel: 'icon', href: `/gong.ico` }]
    // ['link', { rel: 'manifest', href: `/manifest.json` }]
  ],
  themeConfig: {
    nav:[
      { text: '源码', link: 'stay' },
      { text: 'JS专题', link: '/js/' },
      {
        text: 'ES6',
        link: '/es6/'
      },
      { text: '算法', link: '/algorithm/' },
      {
        text: '更多',
        items: [
          { text: 'Git', link: '/git/' },
          { text: 'Webpack', link: '/webpk/'},
          { text: 'Nginx', link: '/webpk/'},
          { text: 'Linux', link: '/webpk/'}
        ]
      },
      { text: 'GitHub', link: 'https://github.com/gzwgq222' }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/webpk/': [
        {
          title: 'webpack',
          collapsable: false,
          children: ['/webpk/']
        }
      ],
      '/js/': [
        {
          title: 'JS专题系列',
          collapsable: false,
          children: [
            '/js/'
            // ['one', '闭包'],
            // ['two', '数组去重'],
            // ['two', '数组扁平化'],
            // ['two', 'this'],
            // ['two', 'reduce实现map | filter'],
            // ['two', '深 | 浅拷贝'],
            // ['two', '防抖 | 节流'],
            // ['two', '函数柯里化'],
            // ['two', '继承'],
            // ['two', 'event loop'],
            // ['two', '实现call | apply | bind']
          ]
        },
      ],
      '/algorithm/': [
        {
          title: '数据结构与算法',
          collapsable: false,
          children: ['/algorithm/'
            // ['sort', '排序算法'],
            // ['search', '查找算法'],
          ]
        }
      ],
      '/es6/': [
        'promise'
      ]
    }
  }
}