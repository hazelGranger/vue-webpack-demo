import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'

Vue.use(VueRouter)

const router = new VueRouter({
	history: true,
	saveScrollPosition: true,
	hashbang: true
})

configRouter(router)
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
router.start(App,'app')

// window.router = router