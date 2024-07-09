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
  }
]