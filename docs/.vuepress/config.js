module.exports = {
  port: '8089',
  title: "Axiomofchoice's Blog",
  description: "一个退役 ACMer 的个人博客",
  theme: 'vdoing',
  base: "/", // 根路由
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    // 下面两个是数学公式的样式
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }]
  ],
  markdown: {
    lineNumbers: false, // 代码块显示行号
    extendMarkdown: md => {
      md.set({
        html: true
      });
      md.use(require('markdown-it-katex'));
    }
  },
  plugins: [
    [
      'one-click-copy', {  // 代码块的复制按钮 - 插件
        copyMessage: '复制成功！',
        toolTipMessage: '复制代码',
        duration: 1200,
      }
    ],
    'element-ui',
    [
      'feed', {  // rss 订阅
        canonical_base: 'https://axiomofchoice-hjt.github.io',
        count: 5000,
        is_feed_page: (_) => true,
      }
    ]
  ],
  themeConfig: {
    tag: false, // 使用标签
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏结构化目录
    sidebarDepth: 2, // 侧边栏深度
    sidebarOpen: false, // 默认显示左侧边栏
    pageButton: false, // 翻页按钮
    logo: '/img/favicon.ico', // 页首图标
    repo: 'axiomofchoice-hjt/axiomofchoice-hjt.github.io', // 仓库链接
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'Axiomofchoice', // 必需
      link: 'https://github.com/axiomofchoice-hjt', // 可选的
    },
    footer: {
      // 页脚信息
      createYear: 2021, // 博客创建年份
      copyrightInfo:
        'Axiomofchoice | MIT License', // 博客版权信息，支持a标签
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: '/img/favicon.ico',
      name: 'Axiomofchoice',
      slogan: '前 ACMer',
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:axiomofchoice@163.com',
        },
        {
          iconClass: 'icon-QQ',
          title: 'QQ',
          link: 'tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1939696303'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/axiomofchoice-hjt',
        },
        {
          iconClass: 'icon-rss',
          title: 'RSS',
          link: 'https://axiomofchoice-hjt.github.io/rss.xml',
        }
      ],
    },
    nav: [ // 顶部导航栏
      { text: "首页", link: "/" },
      { text: '分类', link: '/categories/' },
      { text: '归档', link: '/archives/' },
      {
        text: 'ACM 板子',
        link: '/pages/e6708e/',
        items: [
          { text: '数学', link: "https://github.com/axiomofchoice-hjt/ACM-axiomofchoice/blob/master/Math.md" },
          { text: '图论', link: "https://github.com/axiomofchoice-hjt/ACM-axiomofchoice/blob/master/Graph.md" },
          { text: '计算几何', link: "https://github.com/axiomofchoice-hjt/ACM-axiomofchoice/blob/master/Geometry.md" },
          { text: '数据结构', link: "https://github.com/axiomofchoice-hjt/ACM-axiomofchoice/blob/master/Datastructure.md" },
          { text: '其他', link: "https://github.com/axiomofchoice-hjt/ACM-axiomofchoice/blob/master/Others.md" },
          { text: '结论', link: "https://github.com/axiomofchoice-hjt/ACM-axiomofchoice/blob/master/Conclusion.md" },
        ],
      },
      { text: "Blockchallenge", link: '/pages/62c303/' }
    ],
    updateBar: { showToArticle: false, moreArticle: '/archives/' }
  }
};
