import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#vue-repos',
  data: {
    title: 'Vue.js repositories',
    repos: []
  },
})
.$mount('#app')
