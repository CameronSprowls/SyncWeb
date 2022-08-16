import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import User from '@/views/Sandbox.vue'
import Settings from '@/views/Settings.vue'
import { PAGE_NAMES } from '@/misc/constants'

const DEFAULT_PATH = "/"



const routes: Array<RouteRecordRaw> = [
  {
    path: DEFAULT_PATH,
    name: PAGE_NAMES.HOME,
    component: Home
  },
  {
    path: DEFAULT_PATH + 'user',
    name: PAGE_NAMES.USER,
    component: User
  },
  {
    path: DEFAULT_PATH + 'settings',
    name: PAGE_NAMES.SETTINGS,
    component: Settings
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
