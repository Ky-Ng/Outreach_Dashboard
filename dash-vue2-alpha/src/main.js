import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify';
import {dataBase, myProjectAuth, user} from "./backend/backend";

Vue.config.productionTip = false

let app

// todo wait for the values of firestore's to be initialized first using a promise
myProjectAuth.onAuthStateChanged(() => {
    //trying to use the async firestore func as buffer
    if (!app) {
        new Vue({
            router,
            vuetify,
            render: h => h(App)
        }).$mount('#app')
    }
})

