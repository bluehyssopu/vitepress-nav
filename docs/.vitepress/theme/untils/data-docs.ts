import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '神',
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
      }
    ]
  },
  {
    title: '前端开发',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org/v2/guide/'
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
        icon: 'https://butterfly.js.org/img/favicon.png',
        title: 'Butterfly主题文档',
        desc: '每个程序员应该都尝试过搭建自己的博客吧',
        link: 'https://butterfly.js.org/'
      }
    ]
  },
]
