import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './theme/Home.vue'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

// ^This will provide lazy loading for the import Category, Login, NotFound
// ^so it's only loaded when needed on the client's browser, useful when this list increases in size

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({y: 0}),
  routes: [
    { path: '/login', component: Login },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/', component: Home },
    { path: '*', component: NotFound }
  ]
})

export default router
