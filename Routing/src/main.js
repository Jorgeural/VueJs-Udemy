import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // Si le has dado a la flecha de Back, vuelves a la misma posición
    if( savedPosition ) {
      return savedPosition;
    }
    if(to.hash) {
      //Si la ruta tiene un hash va a ese id
      return {selector: to.hash}
    }
    // arriba del todo
    return {x: 0, y: 0}
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
