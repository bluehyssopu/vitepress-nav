import { defineConfig } from 'vitepress'

import timeline from "vitepress-markdown-timeline"; 

export default defineConfig({
  lang: 'zh-CN',
  title: "某菜鸟的导航站",
  description: "整理个人工作、学习、生活中的常用网站，提高生产效率，也帮助那个的曾经的自己",

  // #region fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.svg'}],
    ['meta',{ property: 'og:url', content: 'https://nav.kzmqvq.com'}],
    ['meta',{ property: 'og:type', content: 'website'}],
    ['meta',{ property: 'og:title', content: '某菜鸟的导航站'}],
    ['meta',{ property: 'og:description', content: '整理个人工作、学习、生活中的常用网站，提高生产效率，也帮助那个的曾经的自己'}],
    ['meta',{ property: 'og:image', content: 'https://nav.kzmqvq.com/logo.svg'}],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html


  //启用深色模式
  appearance:'dark',

  // 多语言
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'Zh_CN',
  //   },
  //   en: {
  //     label: 'English',
  //     lang: 'en',
  //     link: '/en/',
  //   },
  //   fr: {
  //     label: 'French',
  //     lang: 'fr',
  //     link: '/fr/',
  //   }
  // },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, 

    //时间线 
    config: (md) => {
      md.use(timeline);
    },

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

  },

  
  //主题配置
  themeConfig: {
    //左上角logo
    logo: '/logo.svg',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '📚 指南',
        items: [
          {
            text: '💡 介绍',
            items: [
              { text: '📖 前言', link: '/preface' },
            ],
          },
          {
            text: '🛠️ 基础工具',
            items: [
              { text: '💼 办公提效', link: '/getting-started' },
              { text: '🔍 资源网站', link: '/resources' },
              { text: '☁️ 网盘资料', link: '/pansource' }
            ],
          },
          {
            text: '💻 程序员必备',
            items: [
              { text: '📑 常用文档', link: '/docs' },
              { text: '🔧 开发工具', link: '/dev-tools' }
            ],
          },
          {
            text: '🎮 日常摸鱼',
            items: [
              { text: '🌅 浮生半日', link: '/slackoff' },
            ]
          }
        ],
      },
    ],

    //侧边栏
    sidebar: [
      {
        text: '💡 介绍',
        collapsed: false,
        items: [
          { text: '📖 前言', link: '/preface' },
        ],
      },
      {
        text: '🛠️ 基础工具',
        collapsed: false,
        items: [
          { text: '💼 办公提效', link: '/getting-started' },
          { text: '🔍 资源网站', link: '/resources' },
          { text: '☁️ 网盘资料', link: '/pansource' }
        ],
      },
      {
        text: '💻 程序员必备',
        collapsed: false,
        items: [
          { text: '📑 常用文档', link: '/docs' },
          { text: '🔧 开发工具', link: '/dev-tools' },
        ],
      },
      {
        text: '🎮 日常摸鱼',
        collapsed: false,
        items: [
          { text: '🌅 浮生半日', link: '/slackoff' },
        ],
      },
      {
        text: '🔗 其他站点',
        collapsed: false,
        items: [
          { text: '📝 博客', link: 'https://blog.kzmqvq.com/' },
        ],
      },
    ],

    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bluehyssopu/vitepress-nav' },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024',
    },

    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',

    //大纲显示2-3级标题
    outline: {
      level: [2,3],
      label: '当前页大纲'
    },


    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },
})
