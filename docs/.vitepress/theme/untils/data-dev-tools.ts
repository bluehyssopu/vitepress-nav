import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '开发工具',
    items: [
      {
        icon: 'https://shields.io/img/favicon.ico',
        title: 'Shields.io',
        badge: {
          text: '徽标',
          type: 'info'
        },
        desc: 'Github徽标生成',
        link: 'https://shields.io/'
      },
      {
        icon: 'https://carbon.now.sh/favicon.ico',
        title: 'carbon',
        badge: {
          text: '代码转图片',
          type: 'info'
        },
        desc: '将源码片段转成高亮图片',
        link: 'https://carbon.now.sh/'
      },
      {
        icon: 'https://snippet-generator.app/favicon-32x32.png',
        title: 'snippet generator',
        badge: {
          text: '代码模版',
          type: 'info'
        },
        desc: '根据源码生成自定义的代码模版，导入到vscode、sublime中',
        link: 'https://snippet-generator.app/'
      },
      {
        icon: 'https://www.bejson.com/favicon.ico',
        title: 'BEJSON',
        badge: {
          text: 'JSON',
          type: 'info'
        },
        desc: '在线JSON工具，包括编码加密、网络工具、代码压缩格式化、cron、正则、生成工具等',
        link: 'https://www.bejson.com/'
      },
      {
        icon: 'https://visualgo.net/img/favicon.png',
        title: 'VisuAlgo',
        badge: {
          text: '算法',
          type: 'info'
        },
        desc: '通过动画可视化数据结构和算法',
        link: 'https://visualgo.net/zh'
      },
      {
        icon: 'https://www.boce.com/favicon.ico',
        title: '拨测',
        badge: {
          text: '站长工具',
          type: 'info'
        },
        desc: '实时域名测速，测出网站在全国各地区的打开速度，了解网站访问速度。',
        link: 'https://www.boce.com/'
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      }
    ]
  },
]