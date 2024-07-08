import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '前端开发',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
        title: 'Vue3 One Piece',
        desc: '更快，更轻，易维护，更多的原生支持，包括生态、组件、插件、UI库、开源项目推荐',
        link: 'https://vue3js.cn/'
      },
      {
        icon: iconData.element_icon,
        title: 'Element文档',
        desc: '一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
        link: 'https://element.eleme.cn/#/zh-CN/component/installation'
      },
    ]
  },
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        badge: {
          text: '茂神牛批',
          type: 'info',
        },
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        badge: {
          text: '茂神牛批',
          type: 'tip',
        },
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        badge: {
          text: '茂神牛批',
          type: 'warning',
        },
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        badge: {
          text: '茂神牛批',
          type: 'danger',
        },
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        badge: {
          text: '请给茂茂点点小星星哦',
          type: 'info',
        },
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      }
    ]
  },
]
