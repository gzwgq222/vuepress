const moment = require('moment');

module.exports = {
  base: '/doc/',
  title: '欢乐时光',
  description: 'Stay hungry Stay foolish',
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: `/gong.ico` }]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav:[
      { text: 'Node', link: '/node/' },
      { text: '手写系列', link:'/handle/' },
      { text: '源码学习', link: '/sourceCode/' },
      { text: 'JS归纳', link: '/js/' },
      { text: 'CI/CD', link: '/CI_CD/' },
      {
        text: 'More',
        items: [
          { text: '算法', link: '/algorithm/' },
          { text: '设计模式', link: '/design/'},
          { text: 'Git', link: '/git/' },
          { text: 'Webpack', link: '/webpk/'},
          { text: 'Nginx', link: '/nginx/'},
          { text: 'Linux', link: '/linux/'},
          { text: 'Question', link: '/question/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/gzwgq222' }
    ],
    sidebarDepth: 2,
    // sidebar: 'auto',
    sidebar: {

      '/CI_CD/': [
        '',
        'jenkins',
        'gitlab',
        'travis'
      ],

      '/node/': [
        '',
        'fs',
        'buffer',
        'stream',
        'net',
        'event',
        'apply'
      ]
    }
  },
  plugins: [
    ['@vuepress/back-to-top'],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm')
        }
      }
    ]
  ]
}