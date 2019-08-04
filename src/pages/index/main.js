import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import normalize from 'normalize.css';
import '../../plugins/element.js'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import animate from 'animate.css'
Vue.use(vueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
