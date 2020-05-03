import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a8e03c4 = () => interopDefault(import('../pages/AboutMe/index.vue' /* webpackChunkName: "pages/AboutMe/index" */))
const _74980f6e = () => interopDefault(import('../pages/Hobbies/index.vue' /* webpackChunkName: "pages/Hobbies/index" */))
const _0bfe08d2 = () => interopDefault(import('../pages/Projects/index.vue' /* webpackChunkName: "pages/Projects/index" */))
const _3d768870 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AboutMe",
    component: _5a8e03c4,
    name: "AboutMe"
  }, {
    path: "/Hobbies",
    component: _74980f6e,
    name: "Hobbies"
  }, {
    path: "/Projects",
    component: _0bfe08d2,
    name: "Projects"
  }, {
    path: "/",
    component: _3d768870,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
