import type { NavData } from './types'
import { iconData } from './icon'

export const NAV_DATA: NavData[] = [
  {
    title: '在线游戏',
    items: [
      {
        icon: iconData.xiaobawang_icon,
        title: '小霸王',
        desc: '我最爱的童年插卡游戏，爷青回！',
        link: 'https://www.yikm.net/'
      },
      {
        icon: 'https://minesweeper.cn/favicon.ico',
        title: '扫雷网页版',
        desc: '在成年后才知道扫雷的规则，小时候只会乱点',
        link: 'https://minesweeper.cn/'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: '五子棋网页版',
        desc: '开源的五子棋AI，纯JS代码，纯净无广',
        link: 'https://www.yikm.net/'
      },
      {
        icon: 'https://www.shj.work/img/app-ico.png',
        title: '找色差小游戏',
        desc: '眼睛色差辨识度测试',
        link: 'https://www.shj.work/tools/secha/'
      },
      {
        icon: '',
        title: '',
        desc: '',
        link: ''
      }
    ]
  },
  {
    title: '经典单机',
    items: [
      {
        icon: 'https://pvzgame.net/_next/static/media/favicon.50d1e6c9.svg',
        title: '植物大战僵尸杂交版',
        desc: '赛博孟德尔，启动！',
        link: 'https://pvzgame.net/'
      },
      {
        icon: 'https://pvz-beta.site/favicon.ico',
        title: '植物大战僵尸β版',
        desc: '在杂交版出来之前最喜欢的版本！',
        link: 'https://www.yikm.net/'
      },
    ]
  },
  {
    title: '有趣网站',
    items: [
      {
        icon: 'http://a.topurl.cn/favicon.ico',
        title: '未来小信箱',
        desc: '生成器、简报、字间浮生、聊天室',
        link: 'http://a.topurl.cn/future/?from=715#/more'
      },
      {
        icon: 'https://cbaigui.com/favicon.ico',
        title: '纪妖',
        desc: '我整天在这里看山海经的妖怪',
        link: 'https://www.cbaigui.com/'
      },
      {
        icon: 'https://www.ageeye.cn/statics/icons/favicon-16x16.png',
        title: '观沧海',
        desc: '浏览各个朝代的地图变更',
        link: 'https://www.ageeye.cn/'
      },
      {
        icon: 'https://lf-welfare.amemv.com/obj/douyin-welfare-image/guji/shidian/upload/favicon/logo.svg',
        title: '识典古籍',
        desc: '抖音公益与北大合作共建的古籍阅读平台，诸子百家的经典古籍都能在这找到',
        link: 'https://www.shidianguji.com/'
      }
    ]
  }
]