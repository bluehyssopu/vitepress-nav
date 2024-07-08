import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '集成工具箱',
    items: [
      {
        icon: iconData.convertio_icon,
        title: 'Convertio',
        desc: '伟大，无需多言！',
        link: 'https://convertio.co/'
      },
      {
        icon: 'https://pdf.io/static/i/v3/favicon.svg',
        title: '123APPS',
        desc: '无需登录，所有应用程序均可免费使用，但对文件大小和每天的操作有限制。',
        link: 'https://123apps.com/cn/'
      },
      {
        icon: 'https://m4.publicimg.browser.qq.com/publicimg/nav/qbtool/qbtool-latest.png',
        title: '帮小忙',
        desc: '需要登录的神！之前免费，现在部分需要权益卡了呜呜，图片、PDF、数据转换、视频工具、浏览器插件应有尽有',
        link: 'https://tool.browser.qq.com/'
      },
      {
        icon: '',
        title: '',
        desc: '',
        link: ''
      },
    ]
  },
  {
    title: 'PDF',
    items: [
      {
        icon: 'https://tools.pdf24.org/static/img/pdf24.png?v=658057a1',
        title: '24PDF',
        desc: '专注于PDF的处理工具，免费、在线、无限制',
        link: 'https://tools.pdf24.org/'
      },
    ]
  }
]
