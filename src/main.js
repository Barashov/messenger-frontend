import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

import router from './router'
import store from './store'
import ui from './ui'
import './assets/main.css'
const app = createApp(App)

for (let element of ui) {
    app.component(element.name, element)
}

app.use(router)
app.use(store)
app.use(vue3GoogleLogin, {
    clientId: 'ok'
})
app.mount('#app')
