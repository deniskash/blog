import Vue from 'vue'
// import { createApp } from 'vue'
import App from './App.vue'
// import components from '@/components/UI';
//
// const app = createApp(App)
//
// components.forEach(component => {
//   app.component(component.name, component)
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
