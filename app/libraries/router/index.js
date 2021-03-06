import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

Vue.router = new Router({
  mode: process.env.PUBLIC_URL ? 'history' : 'hash',
  base: process.env.PUBLIC_URL,
  routes: routes
})

export default Vue.router
