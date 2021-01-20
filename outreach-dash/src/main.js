import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { projectAuth } from './firebase/config'


let app
//only create the app and mount to the DOM when the user first logs in
projectAuth.onAuthStateChanged(() => { 
    if(!app){
        app = createApp(App).use(router).mount('#app')
    }
})

