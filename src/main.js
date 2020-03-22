import Vue from 'vue'
import App from './App.vue'
import './plugin'

Vue.config.productionTip = false

// add multple tpyo to try the github acton lower then 5
new Vue({
  render: h => h(App),
}).$mount('#app')
