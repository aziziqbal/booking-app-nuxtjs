import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e34601f6 = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _f80ddccc = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _de2c72aa = () => interopDefault(import('../pages/ticket.vue' /* webpackChunkName: "pages/ticket" */))
const _2b4c9683 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/history",
    component: _e34601f6,
    name: "history"
  }, {
    path: "/profile",
    component: _f80ddccc,
    name: "profile"
  }, {
    path: "/ticket",
    component: _de2c72aa,
    name: "ticket"
  }, {
    path: "/",
    component: _2b4c9683,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
