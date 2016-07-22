import Hello from 'Hello'
import About from 'about'
import Help from 'help'
import NotFound from '404'

export function configRouter (router){
	router.map({
		'/': {
			component: Hello
		},
		'/index': {
			component: Hello
		},
		'/about': {
			component: About
		},
		'/help': {
			component: Help
		},
		'*': {
			component: NotFound
		}
	})

	router.beforeEach((transition) => {
		transition.next()
	})
}