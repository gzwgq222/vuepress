module.exports = {
  base: '/vuepress/',
  title: 'Notes',
  description: 'Stay hungry Stay foolish',
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: `/gong.ico` }]
    // ['link', { rel: 'manifest', href: `/manifest.json` }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    nav:[
      { text: '手写系列', link:'/handle/' },
      { text: '源码学习', link: 'stay' },
      { text: 'js专题', link: '/js/' },
      { text: '算法', link: '/algorithm/' },
      { text: '设计模式', link: '/design/' },
      { text: '持续集成', link: '/jenkins/' },
      { text: 'git', link: '/git/' },
      { text: 'webpack', link: '/webpk/'},
      { text: 'nginx', link: '/nginx/'},
      { text: 'linux', link: '/linux/'},
      // {
      //   text: '更多',
      //   items: [
      //     { text: 'Git', link: '/git/' },
      //     { text: 'Webpack', link: '/webpk/'},
      //     { text: 'Nginx', link: '/webpk/'},
      //     { text: 'Linux', link: '/webpk/'}
      //   ]
      // },
      { text: 'GitHub', link: 'https://github.com/gzwgq222' }
    ],
    sidebarDepth: 2,
    sidebar: 'auto'
    // sidebar: {
    //   '/webpk/': [
    //     {
    //       title: 'webpack',
    //       collapsable: false,
    //       children: ['/webpk/']
    //     }
    //   ],
    //   '/js/': [
    //     {
    //       title: 'JS专题系列',
    //       collapsable: false,
    //       children: [
    //         '/js/'
    //         // ['one', '闭包'],
    //         // ['two', '数组去重'],
    //         // ['two', '数组扁平化'],
    //         // ['two', 'this'],
    //         // ['two', 'reduce实现map | filter'],
    //         // ['two', '深 | 浅拷贝'],
    //         // ['two', '防抖 | 节流'],
    //         // ['two', '函数柯里化'],
    //         // ['two', '继承'],
    //         // ['two', 'event loop'],
    //         // ['two', '实现call | apply | bind']
    //       ]
    //     },
    //   ],
    //   '/algorithm/': [
    //     {
    //       title: '数据结构与算法',
    //       collapsable: false,
    //       children: ['/algorithm/'
    //         // ['sort', '排序算法'],
    //         // ['search', '查找算法'],
    //       ]
    //     }
    //   ],
    //   '/jenkins/': [
    //     {
    //       title: '持续集成',
    //       collapsable: false,
    //       children: ['/jenkins/']
    //     }
    //   ],
    //   '/es6/': [
    //     'promise'
    //   ]
    // }
  }
}