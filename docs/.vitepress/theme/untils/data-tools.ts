import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '集成工具箱',
    items: [
      {
        icon: iconData.convertio_icon,
        title: 'Convertio',
        desc: '伟大，无需多言！免费支持所有（大概）文件格式转换',
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
    title: 'AI对话助手',
    items: [
      {
        icon: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.82af6fe1.png',
        title: 'ChatGPT',
        badge: {
          text: '神',
          type: 'info'
        },
        desc: '还需要我介绍？',
        link: 'https://www.chatgpt.com/'
      },
      {
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        title: 'Kimi',
        desc: '在长文本处理上很不错，结合提示词模版乱杀',
        link: 'https://kimi.moonshot.cn/'
      },
      {
        icon: 'https://g.alicdn.com/idst-fe/mind-meeting-assistant2/0.1.8/favicon.png',
        title: '通义听悟',
        desc: '听悟整理视频文本，kimi分析总结，什么网课笔记、会议纪要，通通拿下！',
        link: 'https://tingwu.aliyun.com/u/p7g395wado69z654'
      }
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
  },
  {
    title: 'PPT',
    items: [
      {
        icon: 'https://chatppt.cn/favicon.ico',
        title: 'ChatPPT',
        desc: '根据思维导图、文本、主题等一键生成PPT，我经常用它搭基本的架子、布局',
        link: 'https://chatppt.cn/'
      },
      {
        icon: 'https://www.51pptmoban.com/favicon.ico',
        title: '51PPT',
        desc: '转WPS的模版市场前，经常逛的板子网站',
        link: 'https://www.51pptmoban.com/ppt/'
      }
    ]
  },
  {
    title: '图片',
    items: [
      {
        icon: 'https://xlimage.uzero.cn/shinescan/res/favicon.ico',
        title: '白描网页版',
        desc: '图片文字提取、数学公式识别、电子表格识别、扫描PDF转文字，您是否在找小爱视觉？',
        link: 'https://web.baimiaoapp.com/'
      },
    ]
  }
]
