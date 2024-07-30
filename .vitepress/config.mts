// 导入 defineConfigWithTheme 函数
import { defineConfigWithTheme } from 'vitepress'

// 导入需要继承的配置对象
import escookConfig from '@escook/vitepress-theme/config'

// 美化主题包
// https://www.npmjs.com/package/@escook/vitepress-theme

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  base:'/zek-docs/',
  extends: escookConfig,
  title: "JINFEI的文档小站",
  head:[
    ["link", {rel:"icon", href:"https://static.canva.cn/static/images/favicon-1.ico"}]
  ],
  description: "交个朋友，欢迎来逛",
  themeConfig: {
    nav: [
      { text: '前端',items:[{text:'React', link:'/front-end/react'}, {text:'Vue', link:'/front-end/vue'} ]},
      { text: '网络', items:[{text:'cors原理详解', link:'/network/cors'}] }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'About Me', link: '/about-me' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kerwin-Jin' }
    ],
    footer:{
      copyright:'Copyright@ 2024 JINFEI'
    },
    logo:'https://static.canva.cn/static/images/favicon-1.ico',
    // 搜索框样式
    search:{
      provider:'local',
      options:{
        translations:{
          button:{
            buttonText:'搜索文档',
            buttonAriaLabel:'搜索文档',
          },
          modal:{
            noResultsText:'无法找到相关结果',
            resetButtonTitle:'清除',
            footer:{
              selectText:'选择',
              navigateText:'切换'
            }
          }
        }
      }
    },
    // 通过此配置项，启用背景音乐的小组件
    musicBall: {
      src: 'https://img3.tukuppt.com/newpreview_music/09/01/62/5c89fd22dea6948307.mp3'
    },
  }
})
