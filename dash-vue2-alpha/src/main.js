import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { myProjectAuth } from './backend/backend'

Vue.config.productionTip = false

let app

myProjectAuth.onAuthStateChanged(() => {
  if (!app){
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
  }
})