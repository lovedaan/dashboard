/**
 * Vuex docs
 * https://vuex.vuejs.org/zh-cn
 * https://github.com/vuejs/vue-hackernews-2.0
 * http://www.ruanyifeng.com/blog/2014/05/restful_api.html
 */
import Vue from 'vue'
import Vuex from 'vuex'

// // Make sure state writeable
// import * as state from './state' // prop readonly
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import * as modules from './modules'

Vue.use(Vuex)

const strict = process.env.NODE_ENV !== 'production'

const plugins = []

const store = new Vuex.Store({ state, getters, mutations, actions, modules, strict, plugins })

// ## Initial
// store.dispatch('initToken')

// ## Hot module replacement
if (module.hot) {
  module.hot.accept([
    './getters',
    './mutations',
    './actions',
    './modules/comments',
    './modules/menus',
    './modules/options',
    './modules/posts',
    './modules/terms',
    './modules/tokens',
    './modules/users',
    './modules/demo'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      mutations: require('./mutations'),
      actions: require('./actions'),
      modules: {
        comments: require('./modules/comments'),
        menus: require('./modules/menus'),
        options: require('./modules/options'),
        posts: require('./modules/posts'),
        terms: require('./modules/terms'),
        tokens: require('./modules/tokens'),
        users: require('./modules/users'),
        demo: require('./modules/demo')
      }
    })
  })
}

export default store

// // accept first param must be literal !!!
// if (module.hot) {
//   const accepts = [
//     './getters',
//     './mutations',
//     './actions'
//   ]
//   module.hot.accept(accepts, () => {
//     store.hotUpdate({
//       getters: require('./getters'),
//       mutations: require('./mutations'),
//       actions: require('./actions')
//     })
//   })
// }
