import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Dynamic, Mail, OnlineStatus, Tray, FriendsList } from './noLazyRouter.ts'

/**! 创建窗口后再跳转页面就会导致样式没有生效所以不能使用懒加载路由的方式，有些页面需要快速响应的就不需要懒加载 */
const { BASE_URL } = import.meta.env
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-window/Login.vue')
  },
  {
    path: '/qrCode',
    name: 'qrCode',
    component: () => import('@/views/login-window/QRCode.vue')
  },
  {
    path: '/tray',
    name: 'tray',
    component: Tray
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/home-window/message/index.vue')
      },
      {
        path: '/friendsList',
        name: 'friendsList',
        component: FriendsList
      },
      {
        path: '/searchDetails',
        name: 'searchDetails',
        component: () => import('@/views/home-window/SearchDetails.vue')
      }
    ]
  },
  {
    path: '/robot',
    name: 'robot',
    component: () => import('@/views/home-window/robot/index.vue'),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/home-window/robot/views/Welcome.vue')
      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/home-window/robot/views/Chat.vue')
      },
      {
        path: '/chatSettings',
        name: 'chatSettings',
        component: () => import('@/views/home-window/robot/views/chatSettings/index.vue')
      }
    ]
  },
  {
    path: '/mail',
    name: 'mail',
    component: Mail
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: Dynamic
  },
  {
    path: '/onlineStatus',
    name: 'onlineStatus',
    component: OnlineStatus
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/home-window/more/About.vue')
  },
  {
    path: '/alone',
    name: 'alone',
    component: () => import('@/views/home-window/message/Alone.vue')
  },
  {
    path: '/sharedScreen',
    name: 'sharedScreen',
    component: () => import('@/views/home-window/SharedScreen.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/home-window/more/settings/index.vue'),
    children: [
      {
        path: '/general',
        name: 'general',
        component: () => import('@/views/home-window/more/settings/General.vue')
      },
      {
        path: '/remind',
        name: 'remind',
        component: () => import('@/views/home-window/more/settings/Remind.vue')
      },
      {
        path: '/loginSetting',
        name: 'loginSetting',
        component: () => import('@/views/home-window/more/settings/LoginSetting.vue')
      }
    ]
  }
]

// 创建路由
const router: any = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})
export default router
