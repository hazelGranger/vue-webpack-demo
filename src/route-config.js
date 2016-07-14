export function configRouter (router){
	router.map({
		'/': {
			component: require('./components/Hello.vue')
		},
		'/index': {
			component: require('./components/Hello.vue')
		},
		'/about': {
			component: require('./components/about.vue')
		},
		'/help': {
			component: require('./components/help.vue')
		},
		'*': {
			component: require('./components/404.vue')
		}
	})

	router.beforeEach((transition) => {
		transition.next()
	})
}