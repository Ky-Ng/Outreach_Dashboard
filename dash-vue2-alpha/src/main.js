import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify';
import {getCollection, myProjectAuth} from "./backend/backend";

Vue.config.productionTip = false

let app

myProjectAuth.onAuthStateChanged(() => {
  let isFirestoreInitialized = getCollection("curriculum",[])
  console.log(isFirestoreInitialized)
  // todo wait for the values of firestore's to be initialized first using a promise
  //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await --> async
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise --> promise
  if (!app){
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
  }
})