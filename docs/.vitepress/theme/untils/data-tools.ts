import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '🛠️ 集成工具箱',
    items: [
      {
        icon: iconData.convertio_icon,
        title: 'Convertio',
        badge: {
          text: '转换',
          type: 'info'
        },
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
        icon: 'https://freecompress.com/favicon-16x16.png',
        title: 'FreeCompress',
        badge: {
          text: '压缩',
          type: 'info'
        },
        desc: '随时随地压缩文件，包括图像、视频、音频、代码文件、PDF',
        link: 'https://freecompress.com/zh-cn'
      },
    ]
  },
  {
    title: '🤖 AI对话助手',
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
        badge: {
          text: '长文本处理',
          type: 'info'
        },
        desc: '在长文本处理上很不错，结合提示词模版乱杀',
        link: 'https://kimi.moonshot.cn/'
      },
      {
        icon: 'https://g.alicdn.com/idst-fe/mind-meeting-assistant2/0.1.8/favicon.png',
        title: '通义听悟',
        badge: {
          text: '超长语音转文本',
          type: 'info'
        },
        desc: '听悟整理视频文本，kimi分析总结，什么网课笔记、会议纪要，通通拿下！',
        link: 'https://tingwu.aliyun.com/u/p7g395wado69z654'
      }
    ]
  },
  {
    title: '📄 PDF',
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
    title: '📊 PPT',
    items: [
      {
        icon: 'https://chatppt.cn/favicon.ico',
        title: 'ChatPPT',
        badge: {
          text: '登录',
          type: 'info'
        },
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
    title: '🖼️ 图片',
    items: [
      {
        icon: 'https://photokit.com/favicon.ico',
        title: 'PhotoKit图片编辑器',
        badge: {
          text: '在线PS，魔法消除YYDS',
          type: 'info'
        },
        desc: '基于AI人工智能的在线图片编辑器，方便易用。您可以通过编辑器一键抠图、改图、修图、美图等。',
        link: 'https://photokit.com/?lang=zh'
      },
      {
        icon: 'https://xlimage.uzero.cn/shinescan/res/favicon.ico',
        title: '白描网页版',
        desc: '图片文字提取、数学公式识别、电子表格识别、扫描PDF转文字，您是否在找小爱视觉？',
        link: 'https://web.baimiaoapp.com/'
      },
      {
        icon: 'https://tool.tanpok.com/favicon.ico',
        title: 'tanpok工具网',
        desc: '效果极佳的本地图片压缩工具，永久免费',
        link: 'https://tool.tanpok.com/#/ImgCompress'
      },
      {
        icon: 'http://zuohaotu.com/favicon.ico',
        title: '做好图',
        desc: '它的图片拼接功能超好用，很适合大小一致的图拼九宫格',
        link: 'http://zuohaotu.com/'
      },
      {
        icon: 'https://bigjpg.com/static/css/touch-icon-ipad.png',
        title: 'Bigjpg',
        badge: {
          text: '无损放大的神',
          type: 'info'
        },
        desc: '免费的在线图片无损放大工具',
        link: 'https://bigjpg.com/'
      },
      {
        icon: 'https://removebg.one/static/images/common/logo.svg',
        title: 'Removebg',
        desc: '免费在线图片去背景',
        link: 'https://removebg.one/'
      },
      {
        icon: 'https://www.vectorpea.com/icon512.png',
        title: 'Vectorpea',
        desc: '在线的矢量图编辑器，免登录，很适合编辑iconfont的图标',
        link: 'https://www.vectorpea.com/'
      },
    ]
  },
  {
    title: '🧠 思维导图',
    items: [
      {
        icon: 'https://www.processon.com/favicon.ico',
        title: 'ProcessOn',
        badge: {
          text: '登录',
          type: 'danger'
        },
        desc: '免费在线流程图思维导图，支持多人实时在线协作',
        link: 'https://www.processon.com/'
      }
    ]
  },
  {
    title: '🎬 视频',
    items: [
      {
        icon: 'https://gotovlog.com/assets/images/favicon.ico',
        title: 'GOTOVLOG',
        desc: '你的视频创作指南，极地手记',
        link: 'https://gotovlog.com/'
      },
      {
        icon: 'https://www.yalijuda.com/qfy-content/uploads/2020/05/81a83783c78bbe2002d50d4a16c55e21.png',
        title: '鸭力巨大',
        desc: '一款完全免费的在线图片/视频压缩工具',
        link: 'https://www.yalijuda.com/'
      },
      {
        icon: 'https://bigmp4.com/htdocs/favicon.ico',
        title: 'bigmp4',
        badge: {
          text: '登录付费',
          type: 'danger'
        },
        desc: '将视频无损高清放大、增强画质、智能补帧，同时支持黑白视频上色和慢动作',
        link: 'https://bigmp4.com/'
      },
      {
        icon: iconData.youla_icon,
        title: '有啦拼字幕',
        desc: '视频字幕拼接，现仅提供小程序端的服务',
        link: 'https://yoo.la/'
      },
      {
        icon: '/logo.svg',
        title: '截图拼接工具',
        desc: '视频字幕拼接，支持网页端，网站无图标',
        link: 'https://join-screenshots.zhanghai.me/'
      }

    ]
  },
  {
    title: '🎨 素材集市',
    items: [
      {
        icon: 'https://www.iconfont.cn/favicon.ico',
        title: '阿里图标库',
        badge: {
          text: '图标',
          type: 'info'
        },
        desc: '世界上最好用的图标网站',
        link: 'https://www.iconfont.cn/'
      },
      {
        icon: 'https://cdn-sqn.aigei.com/assets/site/img/logo/aigei_114-114.png',
        title: '爱给网',
        badge: {
          text: '音效',
          type: 'info'
        },
        desc: '经常从这里拿音效和配乐，自媒体必备',
        link: 'https://www.aigei.com/'
      },
      {
        icon: 'https://cdn.sa.net/2024/09/04/2AdXvCDteh7rcZx.jpg',
        title: 'Pexels',
        badge: {
          text: '图片视频',
          type: 'info'
        },
        desc: '才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频',
        link: 'https://www.pexels.com/zh-cn/'
      },
      {
        icon: 'https://cdn.sa.net/2024/09/04/BydY8qhOjUEKCso.png',
        title: 'Pixabay',
        badge: {
          text: '图片视频',
          type: 'info'
        },
        desc: '最好用的无版权图片库，拥有超过4.5百万张优质图片和视频素材，简洁无广免费可商用',
        link: 'https://pixabay.com/zh/'
      },
      {
        icon: 'https://www.fonts.net.cn/favicon.ico',
        title: '字体天下',
        badge: {
          text: '字体',
          type: 'info'
        },
        desc: '选择商用免费字体，在线预览，一键下载使用',
        link: 'https://www.fonts.net.cn/'
      },
      {
        icon: 'https://free-stock.video/public/291713-32.png',
        title: 'Free Stock Video',
        badge: {
          text: '视频',
          type: 'info'
        },
        desc: '免费4K影片片段素材，可商用',
        link: 'https://free-stock.video/'
      },
      {
        icon: 'https://www.ssyer.com/favicon.ico',
        title: '沙沙野',
        badge: {
          text: '登录',
          type: 'danger'
        },
        desc: '分享免费的图片和视频，百万素材免费下载可商用',
        link: 'https://www.ssyer.com/'
      },
    
    ]
  }
]
