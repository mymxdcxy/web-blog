module.exports = {
  base: '/web-blog/',
  title: '没有梦想的程序员',
  description: '坚持学习让自己每天进步一点',
  themeConfig: {
    repo:'https://github.com/mymxdcxy',  // github远程仓库地址
    repoLabel: 'my github', //自定义仓库链接文字
    nav: [
      {text: 'Home',link: '/'},
      {text: '工具方法',link: '/utility/'}
    ],
    sidebar: [
      {
        title: '常用工具',
        children:[
          '/utility/git',
          '/utility/async-await-error',
          '/utility/pm2'
        ]
      }
    ]
  }
}
