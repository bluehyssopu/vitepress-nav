import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '学习笔记',
    items: [
      {
        icon: iconData.quick_reference_icon,
        title: 'Quick Reference',
        desc: '为开发人员分享快速参考备忘清单【速查表】',
        link: 'https://wangchujiang.com/reference/'
      },
      {
        icon: 'https://r2coding.com/r2_static/img/favicon.ico',
        title: 'Road To Coding',
        desc: '大佬CodeSheep的网站，羊哥，我的超人！',
        link: 'https://r2coding.com/'
      },
      {
        icon: 'https://interviewguide.cn/images/personal/logo.png',
        title: '阿秀的学习笔记',
        desc: '什么？你也是C++选手？',
        link: 'https://interviewguide.cn/'
      },
      {
        icon: 'https://brucecqm.github.io/bruceblogpages/logo.png',
        title: 'BruceBlog',
        desc: '一名前端er的学习笔记，看黑马教程时搭配这个文档学习',
        link: 'https://brucecqm.github.io/bruceblogpages/'
      },
      {
        icon: 'https://muyiy.cn/favicon.ico',
        title: '木易杨前端进阶',
        desc: '高级前端进阶之路，能力提升、面试经验、求职内推等',
        link: 'https://muyiy.cn/'
      }
    ]
  },
  {
    title: '前端开发',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN Web Docs',
        badge: {
          text: '梦开始的地方',
          type: 'info'
        },
        desc: '从2005年开始记录web技术，包括CSS, HTML和JavaScript',
        link: 'https://developer.mozilla.org/zh-CN/'
      },
      {
        icon: 'https://toastlog.com/img/logos/cssscan.svg',
        title: 'CSS box-shadow',
        desc: '哪个前端能拒绝得了各式各样的盒子阴影，在线预览、一键复制',
        link: 'https://getcssscan.com/css-box-shadow-examples'
      },
      {
        icon: 'https://www.typescriptlang.org/favicon.ico',
        title: 'TypeScript',
        desc: '微软官方源码仓库的文档链接，提供中文',
        link: 'https://www.typescriptlang.org/docs/'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org/v2/guide/'
      },
      {
        icon: 'https://react.dev/favicon.ico',
        title: 'React',
        desc: '用于构建 Web 和原生交互界面的库，提供中文',
        link: 'https://react.dev/'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue源码系列',
        desc: '针对vue2.6版本逐行剖析源码，九大模块，逐个击破',
        link: 'https://vue-js.com/learn-vue/'
      },
      {
        icon: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
        title: 'Vue3 One Piece',
        desc: '更快，更轻，易维护，更多的原生支持，包括生态、组件、插件、UI库、开源项目推荐',
        link: 'https://vue3js.cn/'
      },
      {
        icon: iconData.element_icon,
        title: 'Element',
        desc: '一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
        link: 'https://element.eleme.cn/#/zh-CN/component/installation'
      },
      {
        icon: iconData.element_icon,
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org/zh-CN/component/overview.html'
      },
      {
        icon: 'https://hexo.io/logo.svg',
        title: 'Hexo文档',
        desc: '快速、简洁且高效的博客框架',
        link: 'https://hexo.io/zh-cn/'
      },
      {
        icon: 'https://butterfly.js.org/img/favicon.png',
        title: 'Butterfly主题文档',
        desc: '每个程序员应该都尝试过搭建自己的博客吧',
        link: 'https://butterfly.js.org/'
      },
      {
        icon: 'https://nodejs.org/static/images/favicons/favicon.png',
        title: 'Node.js官网',
        desc: 'Node.js是一个免费、开源、跨平台的 JavaScript 运行时环境，它让开发人员能够创建服务器、Web 应用、命令行工具和脚本。',
        link: 'https://nodejs.org/zh-cn'
      },
      {
        icon: 'https://img.nodejs.cn/favicon.png',
        title: 'Node.js中文网',
        desc: '提供中文API文档、学习教程及下载链接，同时提供众多npm包如 express、koa、mongoose 等框架的学习文档',
        link: 'https://nodejs.cn/'
      },
      {
        icon: 'https://webpack.docschina.org/icon-square-small.85ba630cf0c5f29ae3e3.svg',
        title: 'Webpack',
        desc: '打包构建你的静态资源，官网提供中文站点',
        link: 'https://webpack.js.org/guides/'
      },
      {
        icon: 'https://vitejs.dev/logo.svg',
        title: 'Vite',
        desc: 'Vite 是一个新型前端构建工具，官网提供中文站点',
        link: 'https://vitejs.dev/'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh'
      },
      {
        icon: 'https://vitepress.dev/vitepress-logo-mini.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev'
      },
    ]
  },
  {
    title: '后端开发',
    items: [
      {
        icon: 'https://potoyang.gitbook.io/spring-in-action-v5/~gitbook/icon?size=small&theme=light',
        title: 'Spring 实战(第 5 版)',
        desc: '哥们实习期转岗就啃的这本gitbook',
        link: 'https://potoyang.gitbook.io/spring-in-action-v5'
      },
    ]
  },
  {
    title: '社区论坛',
    items: [
      {
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        title: 'Github',
        badge: {
          text: '推荐',
          type: 'tip'
        },
        desc: '世界上最大的同性交友网站',
        link: 'https://github.com/'
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        badge: {
          text: '推荐',
          type: 'tip'
        },
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg',
        title: '掘金',
        badge: {
          text: '推荐',
          type: 'tip'
        },
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn/'
      },
      {
        icon: 'https://assets.leetcode.cn/aliyun-lc-upload/uploaded_files/2021/03/73c9f099-abbe-4d94-853f-f8abffd459cd/leetcode.png?x-oss-process=image%2Fformat%2Cwebp',
        title: 'LeetCode',
        desc: 'wrong answer, compiler error, timeout',
        link: 'https://leetcode.cn/'
      },
      {
        icon: 'https://www.nowcoder.com/favicon.ico',
        title: '牛客网',
        desc: '在？看看面经',
        link: 'https://www.nowcoder.com/'
      },
      // {
      //   icon: '',
      //   title: '个人建议：',
      //   desc: '后面的论坛少逛，容易高血压',
      //   link: 'https://nav.kzmqvq.com'
      // },
      {
        icon: 'https://www.csdn.net/favicon.ico',
        title: 'CSDN',
        desc: '你喜欢在垃圾堆里刨金子吗',
        link: 'https://www.csdn.net/'
      },
      {
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.81060cab.png',
        title: '知乎',
        desc: '每次搜索笔记，都提醒我请登录',
        link: 'https://www.zhihu.com/'
      },
      {
        icon: 'https://www.cnblogs.com/favicon.ico',
        title: '博客园',
        desc: '页面十分简洁，专注内容，以至于我感觉在看老报纸……',
        link: 'https://www.cnblogs.com/'
      },
      {
        icon: 'https://www.jianshu.com/favicon.ico',
        title: '简书',
        desc: '现在已经变成小说网站的形状了',
        link: 'https://www.jianshu.com/'
      },
    ]
  },
  {
    title: '在线教程',
    items: [
      {
        icon: 'https://www.runoob.com/favicon.ico',
        title: '菜鸟教程',
        desc: '适合初学者零基础的开发人员',
        link: 'https://www.runoob.com/'
      },
      {
        icon: 'https://www.w3school.com.cn/ui2019/logo-180.png',
        title: 'W3school 在线教程',
        desc: '领先的 Web 技术教程，全部免费',
        link: 'https://www.w3school.com.cn/'
      },
      {
        icon: 'https://www.w3cschool.cn/favicon.ico',
        title: 'W3Cschool 编程狮',
        desc: '免费的在线编程入门教程&技术文档，随时随地学编程',
        link: 'https://www.w3cschool.cn/tutorial'
      }
    ]
  }
]
